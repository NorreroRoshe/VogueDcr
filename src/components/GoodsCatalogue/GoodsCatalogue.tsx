'use client'
import React, {useEffect, useMemo, useRef, useState} from "react";
import cls from "./GoodsCatalogue.module.scss";
import Sorts from "../Sorts";
import { FilterBlock } from "./FilterBlock/FilterBlock";
import { CatalogCategories } from "./AllCatalogs/CatalogCategories";
import { GoodsTitleCategories } from "./AllCatalogs/GoodsTitleCategories";
import { ProdBlock } from "./GoodsBlock/ProdBlock";
import Skeleton from "./GoodsBlock/Skeleton";
import NotFoundBlock from "../NotFoundBlock";
import { Pagination } from "../Pagination";
import { COUNT_PER_PAGE } from "../Pagination/pagination-lib";
import { useLateEffect } from "../../hooks/useLateEffect";
import {useRouter, usePathname, useSearchParams, useParams} from "next/navigation";
import Breadcrumb from '@/components/ui/breadcrumb';
import { useStore } from "@/hooks/useStore";
import { ISiteCategory } from "@/settings/site-path-cathegory";
import {observer} from "mobx-react";
import {arrayToString, isEntryArray} from "@/api/Product/ProductService";
import { sitePathCategory } from "@/settings/site-path-cathegory";
import { useModifiedRequestParams} from "@/hooks/useGetCategories";
import { flushSync } from "react-dom";
import {AllCatalogs} from "@/components/GoodsCatalogue/AllCatalogs/AllCatalogs";
import {
  DiametrRange,
  HeightRange,
  IndentRange,
  IRange,
  LampCountRange,
  LengthRange,
  PriceRange,
  WidthRange
} from "@/settings/range-settings";
import {useUI} from "@/contexts/ui.context";
import {Drawer} from "@/components/common/drawer/drawer";
import {getDirection} from "@/utils/get-direction";

class ICategoryNames {
}

export const GoodsCatalogue: React.FC = observer(() => {

  const {
    openShop,
    closeShop,
    displayShop,
  } = useUI();

  const dir = getDirection('rtl');
  const contentWrapperCSS = dir === 'rtl' ? { left: 0 } : { right: 0 };

  const { openDrawer, setDrawerView } = useUI();

  const store = useStore();
  const [trigger, setTrigger] = useState(false);
  const productStore = store.product;
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchPage = searchParams.get('Page');
  const searchPageNum = Number(searchPage);

  const [page, setPage] = React.useState(searchPageNum);
  const [currentPage, setCurrentPage] = useState(1);

  const filterRout = useRouter();

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean);

  const sort = productStore.sort;
  const filters = productStore.filters;

  const products = productStore.items;
  const productsCount = productStore.totalCount;
  const filterСategories = productStore.categoriesFil;






  const getNumberParam = (param: string, defaultValue: number): number => {
    const value = searchParams.get(param);
    return !isNaN(parseInt(value || '')) ? parseInt(value || '') : defaultValue;
  };

  const getNumberArrayParam = (param: string): number[] => {
    return searchParams.getAll(param).map(Number);
  };

  const parsedMinLamp = getNumberParam('MinLampCount', LampCountRange.minValue);
  const parsedMaxLamp = getNumberParam('MaxLampCount', LampCountRange.maxValue);

  const parsedMinDiam = getNumberParam('MinDiameter', DiametrRange.minValue);
  const parsedMaxDiam = getNumberParam('MaxDiameter', DiametrRange.maxValue);

  const parsedMinHeight = getNumberParam('MinHeight', HeightRange.minValue);
  const parsedMaxHeight = getNumberParam('MaxHeight', HeightRange.maxValue);

  const parsedMinWidth = getNumberParam('MinWidth', WidthRange.minValue);
  const parsedMaxWidth = getNumberParam('MaxWidth', WidthRange.maxValue);

  const parsedMinLength = getNumberParam('MinLength', LengthRange.minValue);
  const parsedMaxLength = getNumberParam('MaxLength', LengthRange.maxValue);

  const parsedMinIndent = getNumberParam('MinIndent', IndentRange.minValue);
  const parsedMaxIndent = getNumberParam('MaxIndent', IndentRange.maxValue);

  const parsedMinPrice = getNumberParam('MinPrice', PriceRange.minValue);
  const parsedMaxPrice = getNumberParam('MaxPrice', PriceRange.maxValue);

  const ProductTypesArray = getNumberArrayParam('ProductTypes');
  const CategoriesArray = getNumberArrayParam('Categories');
  const AdditionalParamsArray = getNumberArrayParam('AdditionalParams');
  const PictureMaterialArray = getNumberArrayParam('filter7');
  const MaterialsArray = getNumberArrayParam('filter5');
  const StylesArray = getNumberArrayParam('filter6');
  const colorsArray = getNumberArrayParam('filter2');
  const chandelierTypesArray = getNumberArrayParam('filter3');
  const StilkovrovArray = getNumberArrayParam('filter8');
  const CarpetMaterialArray = getNumberArrayParam('filter9');
  const HomeMaterialArray = getNumberArrayParam('filter10');
  const AccesMaterialArray = getNumberArrayParam('filter11');
  const BagetMaterialArray = getNumberArrayParam('filter12');
  const HolstMaterialArray = getNumberArrayParam('filter13');

  const parsedSearchIsSale = searchParams.get('IsSale') === 'true';


  const addIfNotEmpty = (key: string, value: any) => (value && value.length > 0 ? { [key]: value } : {});
  const addIfNotDefault = (key: string, value: number, defaultValue: number) => {
    return value !== defaultValue ? { [key]: value } : {};
  };

// Создание объекта с параметрами запроса
  const requestParams = {
    ...addIfNotEmpty('ProductTypes', ProductTypesArray),
    ...addIfNotEmpty('Categories', CategoriesArray),
    ...addIfNotEmpty('filter6', StylesArray),
    ...addIfNotEmpty('AdditionalParams', AdditionalParamsArray),
    ...addIfNotEmpty('filter7', PictureMaterialArray),
    ...addIfNotEmpty('filter5', MaterialsArray),
    ...addIfNotEmpty('filter2', colorsArray),
    ...addIfNotEmpty('filter3', chandelierTypesArray),
    ...addIfNotEmpty('filter8', StilkovrovArray),
    ...addIfNotEmpty('filter9', CarpetMaterialArray),
    ...addIfNotEmpty('filter10', HomeMaterialArray),
    ...addIfNotEmpty('filter11', AccesMaterialArray),
    ...addIfNotEmpty('filter12', BagetMaterialArray),
    ...addIfNotEmpty('filter13', HolstMaterialArray),

    // Применяем проверку на дефолтные значения для параметров с числовыми значениями
    ...addIfNotDefault('MinDiameter', parsedMinDiam, DiametrRange.minValue),
    ...addIfNotDefault('MaxDiameter', parsedMaxDiam, DiametrRange.maxValue),
    ...addIfNotDefault('MinLampCount', parsedMinLamp, LampCountRange.minValue),
    ...addIfNotDefault('MaxLampCount', parsedMaxLamp, LampCountRange.maxValue),
    ...addIfNotDefault('MinHeight', parsedMinHeight, HeightRange.minValue),
    ...addIfNotDefault('MaxHeight', parsedMaxHeight, HeightRange.maxValue),
    ...addIfNotDefault('MinWidth', parsedMinWidth, WidthRange.minValue),
    ...addIfNotDefault('MaxWidth', parsedMaxWidth, WidthRange.maxValue),
    ...addIfNotDefault('MinLength', parsedMinLength, LengthRange.minValue),
    ...addIfNotDefault('MaxLength', parsedMaxLength, LengthRange.maxValue),
    ...addIfNotDefault('MinIndent', parsedMinIndent, IndentRange.minValue),
    ...addIfNotDefault('MaxIndent', parsedMaxIndent, IndentRange.maxValue),
    ...addIfNotDefault('MinPrice', parsedMinPrice, PriceRange.minValue),
    ...addIfNotDefault('MaxPrice', parsedMaxPrice, PriceRange.maxValue),

    // Параметр Sale
    ...(parsedSearchIsSale ? { IsSale: parsedSearchIsSale } : {}),

    // Параметр SortType с дефолтным значением 4
    SortType: searchParams.get('sort_by') ? Number(searchParams.get('sort_by')) : 1,
  };






  const { params: modifiedParams, foundCategoryId, foundProductTypeId } = useModifiedRequestParams(requestParams);

  useEffect(() => {                   // Исправить данную ситуацию чтобы без нескольких рендеров, а всего один тот который нужен для рендера страницы
      productStore.getProducts(COUNT_PER_PAGE, page * COUNT_PER_PAGE, modifiedParams);
      productStore.getAllFilters();
  }, [
    productStore.filters,
    searchPage,
    sort,
    page,
    searchParams.toString(),
    foundCategoryId
  ]);

  useEffect(() => {
    const applyFilters = async () => {
      // Ожидаем завершения очистки фильтров
      productStore.clearFilters();

      // Далее выполняем остальные методы
      CategoriesArray.map((categorye) => {
        productStore.setCategories(categorye - 1);
      })
      ProductTypesArray.map((productType) => {
        productStore.setProductTypes(productType - 1);
      })
      colorsArray.map((colors) => {
        productStore.setfilter2(colors - 1);
      })
      PictureMaterialArray.map((pictureMaterial) => {
        productStore.setfilter7(pictureMaterial - 1);
      })
      MaterialsArray.map((material) => {
        productStore.setfilter5(material - 1);
      })
      StylesArray.map((style) => {
        productStore.setfilter6(style - 1);
      })
      chandelierTypesArray.map((type) => {
        productStore.setfilter3(type - 1);
      })
      StilkovrovArray.map((stilkovrov) => {
        productStore.setfilter8(stilkovrov - 1);
      })
      CarpetMaterialArray.map((carpetMaterial) => {
        productStore.setfilter9(carpetMaterial - 1);
      })
      HomeMaterialArray.map((homeMaterial) => {
        productStore.setfilter10(homeMaterial - 1);
      })
      AccesMaterialArray.map((accesMaterial) => {
        productStore.setfilter11(accesMaterial - 1);
      })
      BagetMaterialArray.map((bagetMaterial) => {
        productStore.setfilter12(bagetMaterial - 1);
      })
      HolstMaterialArray.map((holstMaterial) => {
        productStore.setfilter13(holstMaterial - 1);
      })

      productStore.setIsSale(parsedSearchIsSale);

      // Устанавливаем цену и другие параметры
      productStore.setPrice(parsedMinPrice, parsedMaxPrice);
      productStore.setLampCount(parsedMinLamp, parsedMaxLamp);
      productStore.setDiameter(parsedMinDiam, parsedMaxDiam);
      productStore.setHeight(parsedMinHeight, parsedMaxHeight);
      productStore.setWidth(parsedMinWidth, parsedMaxWidth);
      productStore.setLength(parsedMinLength, parsedMaxLength);
      productStore.setIndent(parsedMinIndent, parsedMaxIndent);

      //@ts-ignore
      setPage(searchParams.get(`Page`) === null ? 0 : +searchParams.get(`Page`))
      //@ts-ignore
      setCurrentPage(searchParams.get(`Page`) !== null ? +searchParams.get(`Page`) + 1 : 1)
    };

    applyFilters();
  }, []);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(`Page`, page.toString())
    router.push(`${pathname}?${newParams.toString()}`)
  }, [page]);

  const handleGetProducts = () => {

    flushSync(() => {
      setPage(0);
      setCurrentPage(1);
    });

    const defaultObj: {
      MaxLampCount: number;
      MinLampCount: number;
      MinDiameter: number;
      MaxDiameter: number;
      IsSale: null | boolean; // Add union type to include null and boolean
      [key: string]: number | null | boolean; // Index signature
    } = {
      MaxLampCount: 100,
      MinLampCount: 0,
      MinDiameter: 0,
      MaxDiameter: 2000,


      MinHeight: 0,
      MaxHeight: 2000,

      MinWidth: 0,
      MaxWidth: 1500,

      MinLength: 0,
      MaxLength: 2000,

      MinIndent: 0,
      MaxIndent: 1500,

      MinPrice: 0,
      MaxPrice: 2000000,
      IsSale: null,
    };

    for (const key in defaultObj) {
      if (defaultObj.hasOwnProperty(key) && filters.hasOwnProperty(key)) {
        // @ts-ignore
        if (defaultObj[key] === filters[key]) {
        // @ts-ignore
              delete filters[key];
          }
        }
    }


    const newSearchParams =  filters && Object.entries(filters)
        .map((item) =>
            (item[0] === "ProductTypes" ||
                item[0] === "Categories" ||
                item[0] === "filter6" ||  //Styles
                item[0] === "filter3" ||  // ChandelierTypes
                item[0] === "filter2" || //colors
                item[0] === "AdditionalParams" ||
                item[0] === "filter5" ||  //materials
                item[0] === "filter7") &&  //PictureMaterial
            isEntryArray(item)
                ? arrayToString(item)
                : `${item[0]}=${item[1]}`
        )
        .join("&")?.replace('&&', '&')

    const sort_by = searchParams.get('sort_by');


    if(sort_by !== null) {
      router.push(`${pathname}?${newSearchParams}&sort_by=${sort_by}&Page=0`)
    }else {
      router.push(`${pathname}?${newSearchParams}&Page=0`)
    }

    closeShop();

  };


  const handleSetClear = () => {                        // Исправить данную ситуацию чтобы было без setTimeout

    flushSync(() => {
      setPage(0);
      setCurrentPage(1);
    });

    router.push(`${pathname}?Page=0`);
    productStore.clearFilters();
    setTrigger((prev) => !prev);
    closeShop();
  };

  const filteredCategories =
    (pathSegments[1] === "Lights")
      // ? filterСategories.filter(category => category.id >= 1 && category.id <= 9)
        ? filterСategories.filter(category => category.id >= 1 && category.id <= 5)
      // : (pathSegments[1] === "Furniture" || CategoriesArray.some(id => id >= 11 && id <= 19))
      //   ? filterСategories.filter(category => category.id >= 11 && category.id <= 19)
      //   : (pathSegments[1] === "Mirrors" || CategoriesArray.some(id => id >= 20 && id <= 29))
      //     ? filterСategories.filter(category => category.id >= 20 && category.id <= 29)
          : (pathSegments[1] === "Carpets" || CategoriesArray.some(id => id >= 30 && id <= 35))
            ? filterСategories.filter(category => category.id >= 30 && category.id <= 35)
            : (pathSegments[1] === "TovariDlyaDoma" || CategoriesArray.some(id => id >= 36 && id <= 47))
              ? filterСategories.filter(category => category.id >= 36 && category.id <= 47)
              : (pathSegments[1] === "Accessories" || CategoriesArray.some(id => id >= 48 && id <= 53))
                ? filterСategories.filter(category => category.id >= 48 && category.id <= 53)
                : (pathSegments[1] === "Paints" || CategoriesArray.some(id => id >= 54 && id <= 59))
                  ? filterСategories.filter(category => category.id >= 54 && category.id <= 59)
                  : filterСategories;

  const skeleton = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));

  function handleMobileMenu() {
    return openShop();
  }

  return (
    <>
      <div className={cls.chapter__mt_bread}>
        <Breadcrumb/>
      </div>

      <section className={cls.section_catalogue}>
        <AllCatalogs filteredCategories={filteredCategories} foundCategoryId={foundCategoryId}
                     ProductTypesArray={ProductTypesArray} CategoriesArray={CategoriesArray}/>

        <div className={`${cls.catalogue__container} ${cls.container}`}>

          {/*<FilterBlock handleSetClear={handleSetClear} trigger={trigger} foundCategoryId={foundCategoryId}*/}
          {/*             foundProductTypeId={foundProductTypeId} ProductTypesArray={ProductTypesArray}*/}
          {/*             CategoriesArray={CategoriesArray}*/}
          {/*             sitePathCategory={filteredCategories} handleGetProducts={handleGetProducts} isActive={isActive}*/}
          {/*             handleClick={handleClick}/>*/}

          <div
            className={`${cls.catalogue__product} ${cls.fullWidth}`}>             {/*${NotshouldDisplayFilterBlockAccess && cls.fullWidth}*/}
            <div className={cls.catalogue__product_filsort}>
              <button onClick={handleMobileMenu} className={cls.mobile_filter_button}>
                <svg
                  className={cls.mobile_filter_button__icon}
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                >
                  <path
                    d="M9.32137 18.75H7.5V9.59533L0.9375 2.03485V0.604858H18.75V2.02668L12.5 9.58717V15.6739L9.32137 18.75ZM8.75 17.5403H8.80363L11.25 15.1729V9.16287L17.3246 1.81454H2.37891L8.75 9.15471V17.5403Z"
                    fill="black"
                  ></path>
                </svg>
                <span className={cls.mobile_filter_button__text}>Фильтр</span>
              </button>
              <div className="flex w-full items-center justify-end">
                <Sorts title="Сортировано по:"/>
              </div>

            </div>
            <h3 className={cls.allproduct_heading}>
              {/* Показано {40} товаров из {850}{' '} */}
            </h3>
            <ul className={cls.allproduct_goods_list}>
              {productStore.isLoading ? skeleton :
              products?.map((product) => (
                <ProdBlock key={product.id} product={product}/>
              ))}


            </ul>
          </div>
        </div>
        {(productsCount ?? 0) >= COUNT_PER_PAGE && (
          <Pagination
            count={productsCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            changePage={(num: number) => setPage(num - 1)}
            isLoading={productStore.isLoading}
          />
        )}
      </section>

      <Drawer
        placement={dir === 'ltr' ? 'right' : 'left'}
        open={displayShop}
        onClose={closeShop}
        contentWrapperStyle={contentWrapperCSS}
      >
        <FilterBlock handleSetClear={handleSetClear} trigger={trigger} foundCategoryId={foundCategoryId}
                     foundProductTypeId={foundProductTypeId} ProductTypesArray={ProductTypesArray}
                     CategoriesArray={CategoriesArray}
                     sitePathCategory={filteredCategories} handleGetProducts={handleGetProducts}
        />
      </Drawer>
    </>
  );
});