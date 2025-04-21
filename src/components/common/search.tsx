'use client'
import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import cn from 'classnames';
import SearchBoxModal from '@/components/common/search-box-modal';
import SearchProduct from '@/components/common/search-product';
import SearchProductHits from '@/components/common/search-product-hits';
import useFreezeBodyScroll from '@/utils/use-freeze-body-scroll';
import { useUI } from '@/contexts/ui.context';
import cls from './Common.module.scss';
import { usePathname, useRouter } from 'next/navigation';
import { useStore } from '@/hooks/useStore';
import { observer } from "mobx-react";
import SearchBigModal from "@/components/common/search-big-modal";
import SearchProductHitsBig from "@/components/common/search-product-hits-big";

type Props = {
  className?: string;
  searchId?: string;
  variant?: 'border' | 'fill';
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  inputFocus: boolean;
  setInputFocus: (inputFocus: boolean) => void;
  handleGetSearchProducts: () => void;
};

const Search = observer(({
                           handleGetSearchProducts,
                           inputFocus,
                           setInputFocus,
                           inputValue,
                           setInputValue,
                           className = 'md:w-[730px] 2xl:w-[800px]',
                           searchId = 'search',
                           variant = 'border'}: Props) => {

    const store = useStore();
    const productStore = store.product;

    const router = useRouter();
    const pathname = usePathname();

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
      productStore.setSearchName(e.target.value);
      setInputValue(e.target.value);
    };

    const onButtonClick = () => {
      router.push(`/SearchPage?SearchQuery=${inputValue.replace('+', '%2B')}`);
      handleGetSearchProducts();

      setInputFocus(false);
      closeMobileSearch();
      closeSearch();
    }


    const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        router.push(`/SearchPage?SearchQuery=${inputValue.replace('+', '%2B')}`);
        handleGetSearchProducts();

        setInputFocus(false);
        closeMobileSearch();
        closeSearch();
      }
    };



    const onKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          closeSearch();
          break;
      }
    };



    React.useEffect(() => {
      document.addEventListener('keydown', onKeydown);
      return () => document.removeEventListener('keydown', onKeydown);
    }, []);

    useEffect(() => {
      // Обнулять searchString только при переходе на другие страницы, кроме /SearchPage
      if (pathname !== '/SearchPage') {
        setInputValue('');
      }
    }, [pathname]);


    const {
      displayMobileSearch,
      closeMobileSearch,
      displaySearch,
      closeSearch,
    } = useUI();

    useFreezeBodyScroll(
      inputFocus === true || displaySearch || displayMobileSearch
    );

    function clear() {
      setInputValue('');
      setInputFocus(false);
      closeMobileSearch();
      closeSearch();
    }

    function clearText() {
      setInputValue('');
    }
    function handleCloseSearch() {
      setInputFocus(false);
      closeMobileSearch();
      closeSearch();
    }
    function enableInputFocus() {
      setInputFocus(true);
    }

    const isSmallScreen = useMediaQuery({ query: '(max-width: 1200px)' });
    return (
      <div
        className={cn(
          'w-full transition-all duration-200 ease-in-out',
          className
        )}
      >
        <div
          className={cn('overlay cursor-pointer', {
            open: displayMobileSearch,
            'input-focus-overlay-open': inputFocus === true,
            'open-search-overlay': displaySearch,
          })}
          onClick={handleCloseSearch}
        />

        <div className="w-full flex flex-col justify-center flex-shrink-0 relative z-30">
          <div
            className={`flex flex-col mx-auto w-full ${isSmallScreen ? `${inputFocus ? cls.search_big_zpad_nat : ''} ${cls.search_big_zpad}` : ''}`}
            style={isSmallScreen ? {} : {zIndex: 31}}
          >
            {isSmallScreen ? (
              <SearchBigModal
                searchId={searchId}
                inputFocus={inputFocus}
                name="search"
                value={inputValue}
                onSubmit={handleSearch}
                onKeyDown={handleEnterKeyPress}
                onClear={clearText}
                onFocus={() => enableInputFocus()}
                variant={variant}
              />
            ) : (
              <SearchBoxModal
                searchId={searchId}
                name="search"
                value={inputValue}
                onSubmit={handleSearch}
                onKeyDown={handleEnterKeyPress}
                onClear={clearText}
                onFocus={() => enableInputFocus()}
                variant={variant}
              />
            )}
          </div>

          {inputFocus && (
            <div
              className={`w-full absolute top-[56px] start-0 py-2.5 bg-skin-fill rounded-md flex flex-col overflow-hidden shadow-dropDown z-30 ${cls.searchmodal_wrapp} ${isSmallScreen ? cls.searchmodal_wrapp_big : ''}`}>
              <div className={cls.searchmodal_butflex}>
                <button
                  type="submit"
                  className={cls.butflex_btn}
                  onClick={() => onButtonClick()}
                >
                  <span>Перейти</span>
                </button>
                <button
                  type="submit"
                  className={cls.butflex_close_btn}
                  onClick={handleCloseSearch}
                >
                  <svg className="ui-9F9ST" width="25" height="25" viewBox="0 0 25 25" fill="none"
                       xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.00045 24L24 0.999999M23.9995 24L0.999999 1" stroke="currentColor"
                          stroke-miterlimit="10"></path>
                  </svg>
                </button>
              </div>

              {inputValue.length > 0 && (
                <div>
                  <div
                    className={`py-2.5 ps-5 pe-10 scroll-snap-align-start transition-colors duration-200 ${cls.serch_present_sec}`}
                  >
                    <SearchProduct handleSearch={onButtonClick}/>
                  </div>
                </div>
              )}
              {inputValue === '' && (
                <div>
                  <div className={cls.searchproduct_title}>Хиты продаж</div>

                  <div className={`w-full ${cls.product_serch_present}`}>
                    {productStore.defSearchItems?.map((item, index) => (
                      isSmallScreen ? (
                        <div
                          key={`search-result-key-${index}`}
                          className={`py-2.5 ps-5 pe-10 scroll-snap-align-start transition-colors duration-200 ${cls.serch_present_sec}`}
                          onClick={clear}
                        >
                          <SearchProductHitsBig item={item} key={index}/>
                        </div>
                      ) : (
                        <div
                          key={`search-result-key-${index}`}
                          onClick={clear}
                        >
                          <SearchProductHits item={item}/>
                        </div>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
);

export default Search;
