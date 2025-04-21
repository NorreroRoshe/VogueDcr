'use client'
import React, { useEffect, useState } from "react";
import { ROUTES } from '@/utils/routes';
import { searchProductPlaceholder } from '@/assets/placeholders';
import cls from './Common.module.scss';
import Link from 'next/link';
import SearchResultLoader from '@/components/ui/loaders/search-result-loader';
import { useStore } from "@/hooks/useStore";
import {observer} from "mobx-react";
import Image from "next/image";

type SearchProductProps = {
  handleSearch?: () => void;
};

const SearchProduct: React.FC<SearchProductProps> = observer ( ({handleSearch}) => {

  
  const store = useStore();
  const productStore = store.product;
  
  const product = productStore.searchProduct;

  return (
    productStore.isLoading ?
      (
        <div
          style={{marginTop: '30px'}}
          className={`w-full ${cls.product_serch_present}`}>

          {Array.from({length: 3}).map((_, idx) => (
            <div
              key={`search-result-loader-key-${idx}`}
              className="py-2.5 ps-5 pe-10 scroll-snap-align-start"
            >
              <SearchResultLoader key={idx} uniqueKey={`top-search-${idx}`}/>
            </div>
          ))}
        </div>
      ) : (
        <div>
          {product && product.length > 0 ? (
            <>
              <div className={cls.searchproduct_wrapper_flex}>
                {product?.map((product) => (
                  <Link
                    href={`${ROUTES.PRODUCT}/${product.id}`}
                    key={`ключ-результата-поиска-${product.id}`}
                    className={`group w-full h-auto flex justify-start items-center ${cls.searchproduct_wrapp}`}
                  >
                    <div
                      className={`relative flex w-12 h-12 rounded-md overflow-hidden flex-shrink-0 cursor-pointer me-4 ${cls.searchproduct_img}`}>
                      <Image
                        src={
                        // process.env.NEXT_PUBLIC_PHOTO_URL1 +
                          product.files?.[0].url}
                        width={200}
                        height={200}
                        loading="eager"
                        alt={product.name || 'Product Image'}
                        className="bg-skin-thumbnail object-cover"
                      />
                    </div>
                    <div className={cls.priduct_tile}>
                      <div className={cls.priduct_tile_ho}>{product.name} {product.article}</div>
                      <span className={`${cls.priduct_tile_pr_tw} ${cls.priduct_tile_pr}`} data-testid="price">
                    {product.price} ₽
                  </span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className={cls.parent_wind_container}>
                <button onClick={handleSearch} className={cls.form_window_btn}>
                  Все результаты поиска
                </button>
              </div>
            </>
          ) : (
            <div className={cls.parent_wind_container}>
              <button className={cls.form_window_btn}>
                Ничего не найдено
              </button>
            </div>
          )
        }
      </div>
    )
  );
});

export default SearchProduct;
