'use client'
import React, {useEffect, useRef, useState} from "react";
import cls from "../GoodsCatalogue.module.scss";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import TypeLight from "../../Checkbox/TypeLight";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import RangeComponent, { IMinMax } from "../../sliders/RangeComponent";
import Switch from '@/components/ui/switch';
import { ISiteCategory } from '@/settings/site-path-cathegory';
import { useStore } from "@/hooks/useStore";
import {observer} from "mobx-react";
import ColorCheckboxMB from "@/components/Checkbox/ColorCheckboxMB";
import TypeLightMB from "@/components/Checkbox/TypeLightMB";
import {ICategoryType} from "@/types/Product/product.dtos";
import ColorCheckbox from "@/components/Checkbox/ColorCheckbox";
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


interface FilComponentProps {
  headeDropdownClass?: string;
  array: number[];
  onChangeCategory: (id: number) => void;
  lightCategory: ICategoryType[] | null | undefined;
}

interface IFiltersTypeLight {
  title: string;
  filterKey: number[] | undefined;
  stateKey: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  iconKey: React.JSX.Element;
  lightCategory?: ICategoryType[];
  should: boolean;
  onChange: (ind: number) => void;
  classs?: string;
  FilComponent: React.ComponentType<FilComponentProps>;
}

interface IFiltersRanget {
  should: boolean;
  label: string;
  minKey: number | undefined;
  maxKey: number | undefined;
  range: IRange;
  handler: (props: IMinMax) => void;
}

export type IFilterProps = {
  handleGetProducts: () => void;
  sitePathCategory?: ICategoryType[];
  ProductTypesArray: number[];
  CategoriesArray: number[];
  foundProductTypeId: number | undefined;
  foundCategoryId: number | undefined;
  trigger: boolean;
  handleSetClear: () => void;
};

export const FilterBlock: React.FC<IFilterProps> = observer(
  ({ handleSetClear, trigger, foundCategoryId, foundProductTypeId, handleGetProducts, sitePathCategory, ProductTypesArray, CategoriesArray }) => {

    const store = useStore();
    const productStore = store.product

    const {
      openShop,
      closeShop
    } = useUI();

    const pathname = usePathname();
    const router = useRouter();
    const pathSegments = pathname.split("/").filter(Boolean); // Разбиваем путь на части

    const [isOpenLight, setOpenLight] = useState<boolean>(false);
    const [isOpenDop, setOpenDop] = useState<boolean>(true);
    const [isOpenDop1, setOpenDop1] = useState<boolean>(true);
    const [isOpenDop2, setOpenDop2] = useState<boolean>(true);
    const [isOpenDop3, setOpenDop3] = useState<boolean>(true);
    const [isOpenDop4, setOpenDop4] = useState<boolean>(true);
    const [isOpenDop5, setOpenDop5] = useState<boolean>(true);
    const [isOpenDop6, setOpenDop6] = useState<boolean>(true);
    const [isOpenDop7, setOpenDop7] = useState<boolean>(true);
    const [isOpenColor, setOpenColor] = useState<boolean>(true);

    // const [trigger, setTrigger] = useState(false);
    const searchParams = useSearchParams();
    const currentParams = useSearchParams()
   const params = new URLSearchParams(currentParams);


    const toggleIcon = (isOpen: boolean) => {
      return isOpen ? (
        <IoIosArrowUp className="text-base text-skin-base text-opacity-40" />
      ) : (
        <IoIosArrowDown className="text-base text-skin-base text-opacity-40" />
      );
    };


    const expandIconLight = toggleIcon(isOpenLight);
    const expandIconDop = toggleIcon(isOpenDop);
    const expandIconDop1 = toggleIcon(isOpenDop1);
    const expandIconDop2 = toggleIcon(isOpenDop2);
    const expandIconDop3 = toggleIcon(isOpenDop3);
    const expandIconDop4 = toggleIcon(isOpenDop4);
    const expandIconDop5 = toggleIcon(isOpenDop5);
    const expandIconDop6 = toggleIcon(isOpenDop6);
    const expandIconDop7 = toggleIcon(isOpenDop7);
    const expandIconColor = toggleIcon(isOpenColor);


    const handleSetPrice = (props: IMinMax) => {
      productStore.setPrice(props.min, props.max);
    };

    const handleSetLampsCount = (props: IMinMax) => {
      productStore.setLampCount(props.min, props.max);
    };

    const handleSetDiameter = (props: IMinMax) => {
      productStore.setDiameter(props.min, props.max);
    };

    const handleSetHeight = (props: IMinMax) => {
      productStore.setHeight(props.min, props.max);
    };

    const handleSetWidth = (props: IMinMax) => {
      productStore.setWidth(props.min, props.max);
    };

    const handleSetLength = (props: IMinMax) => {
      productStore.setLength(props.min, props.max);
    };

    const handleSetIndent = (props: IMinMax) => {
      productStore.setIndent(props.min, props.max);
    };


    const handleSetTypeProduct = (ind: number) => {
      productStore.setProductTypes(ind);
    };

      const handleSetCategories = (ind: number) => {
        productStore.setCategories(ind);
    };

    const handleSetTypeColors = (ind: number) => {
      productStore.setfilter2(ind);
    };

    const handleSetChandelierTypes = (ind: number) => {
      productStore.setfilter3(ind);
    };

    const handleSetMaterials = (ind: number) => {
      productStore.setfilter5(ind);
    };

    const handleSetPictureMaterial = (ind: number) => {
      productStore.setfilter7(ind);
    };

    const handleSetStyles = (ind: number) => {
      productStore.setfilter6(ind);
    };

    const handleSetCarpStyles = (ind: number) => {
      productStore.setfilter8(ind);
    };

    const handleSetMaterialsHome = (ind: number) => {
      productStore.setfilter10(ind);
    };


    const handleSetCarpetMat = (ind: number) => {
      productStore.setfilter9(ind);
    };

    const handleSetMatAccessories = (ind: number) => {
      productStore.setfilter11(ind);
    };

    const handleSetSale = () => {
      // TODO подумать почему
      productStore.setIsSale(!productStore.filters.IsSale);
    };


    const [isSaleChecked, setIsSaleChecked] = useState(productStore.filters.IsSale || false);

    useEffect(() => {
      const timeoutId = setTimeout(() => {
        setIsSaleChecked(productStore.filters.IsSale || false);
      }, 1);

      return () => {
        clearTimeout(timeoutId);
      };
    }, [productStore.filters.IsSale]);


    const filterprodTyp = productStore.prodTypFil;
    const filterСolors = productStore.colorsFil;
    const filtercategor = productStore.categoriesFil;
    const filstyles = productStore.stylesFil;
    const filmaterials_host = productStore.materials_hostFil;
    const filstyles_carpet = productStore.styles_carpetFil;
    const filmaterials = productStore.materialsFil;
    const filtypesChand = productStore.typesChandFil;
    const filmaterials_accessories = productStore.materials_accessoriesFil;
    const filterCarpetMat = productStore.carpetMatFil;
    const filmaterial_obr = productStore.material_obrFil;
    const filmaterials_border = productStore.materials_borderFil;
    const filmaterials_home = productStore.materials_homeFil;

    const shouldShowStyles = (filterData: { filter1?: Record<number, boolean> }[]): boolean => {
      if (!Array.isArray(filterData) || filterData.length === 0 || foundCategoryId === undefined) return false;

      const firstStyle = filterData[0];

      const filter1TrueCategory: number[] = firstStyle?.filter1
        ? Object.keys(firstStyle.filter1) // Получаем ключи из filter1 (они строковые)
          .map(Number) // Преобразуем ключи в числа
          .filter((key) => firstStyle.filter1?.[key] === true) // Оставляем только те, где true
        : [];


      return filter1TrueCategory.includes(foundCategoryId);
    };




    function handleCloseFilters() {
      return closeShop();
    }

    const shouldShowStylesProdTyp = (filterData: { filter4?: Record<number, boolean> }[]): boolean => {
      if (!Array.isArray(filterData) || filterData.length === 0 || foundProductTypeId === undefined) return false;

      const firstStyle = filterData[0];

      const filter1TrueProdTyp: number[] = firstStyle?.filter4
        ? Object.keys(firstStyle.filter4) // Получаем ключи из filter4 (они строковые)
          .map(Number) // Преобразуем ключи в числа
          .filter((key) => firstStyle.filter4?.[key] === true) // Оставляем только те, где true
        : [];

      // Условие для отображения блока
      return filter1TrueProdTyp.includes(foundProductTypeId);
    };


    const shouldDisplay = (filterData: any) => shouldShowStyles(filterData) || shouldShowStylesProdTyp(filterData);

    const shouldRenderColors =
      foundProductTypeId === 1 ||
      (foundCategoryId !== undefined && foundCategoryId >= 1 && foundCategoryId <= 9);

    const shouldApplyDiameter =
      (foundCategoryId !== undefined && [1, 3, 4, 5, 6, 7, 10, 13, 21, 22, 23, 24, 25, 26, 27, 29, 32, 36, 49, 50].includes(foundCategoryId)) ||
      (foundProductTypeId !== undefined && [1, 3].includes(foundProductTypeId));

    const shouldApplyDlinna =
      (foundCategoryId !== undefined && [8, 11, 13, 15, 16, 17, 18, 19, 20, 21, 23, 25, 26, 27, 28, 30, 31, 34, 35, 37, 38, 39, 40, 41, 43, 45, 46, 47, 50, 51, 52, 54, 55, 56, 57, 58, 59].includes(foundCategoryId)) ||
      (foundProductTypeId !== undefined && [2, 3, 4, 5, 7].includes(foundProductTypeId));

    const shouldApplyVisota =
      (foundCategoryId !== undefined && [1, 2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 37, 38, 39, 40].includes(foundCategoryId)) ||
      (foundProductTypeId !== undefined && [1, 2, 5, 6].includes(foundProductTypeId));

    const shouldApplyOtstup =
      (foundCategoryId !== undefined && [2, 7, 8, 9, 41].includes(foundCategoryId));

    const shouldApplyLampCount =
      (foundCategoryId !== undefined && [1, 2, 3, 4, 5, 6, 7, 8, 9].includes(foundCategoryId)) ||
      (foundProductTypeId !== undefined && [1].includes(foundProductTypeId));

    const shoudChapter = pathSegments.length === 1;
    const shoudCategor = pathSegments.length === 2;


    const filtersTypeLight: IFiltersTypeLight[] = [
      {
        title: 'Все категории',
        filterKey: productStore.filters.ProductTypes,
        stateKey: isOpenLight,
        setState: setOpenLight,
        iconKey: expandIconLight,
        lightCategory: filterprodTyp,
        should: shoudChapter,
        onChange: handleSetTypeProduct,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      },
      {
        title: 'Категория товаров',
        filterKey: productStore.filters.Categories,
        stateKey: isOpenLight,
        setState: setOpenLight,
        iconKey: expandIconLight,
        lightCategory: sitePathCategory,
        should: shoudCategor,
        onChange: handleSetCategories,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      },
      {
        title: 'Цвет',
        filterKey: productStore.filters.filter2,
        stateKey: isOpenColor,
        setState: setOpenColor,
        iconKey: expandIconColor,
        lightCategory: filterСolors,
        should: !shouldRenderColors,
          // shouldDisplay(filterСolors) &&
        onChange: handleSetTypeColors,
        FilComponent: ColorCheckboxMB
      },
      {
        title: 'Цвет',
        filterKey: productStore.filters.filter2,
        stateKey: isOpenColor,
        setState: setOpenColor,
        iconKey: expandIconColor,
        should: shouldRenderColors,
        onChange: handleSetTypeColors,
        FilComponent: ColorCheckbox
      },
      {
        title: 'Материал',
        filterKey: productStore.filters.filter5,
        stateKey: isOpenDop2,
        setState: setOpenDop2,
        iconKey: expandIconDop2,
        lightCategory: filmaterials,
        should: shouldDisplay(filmaterials) || shoudChapter,
        onChange: handleSetMaterials,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      },
      {
        title: 'Материал аксессуаров',
        filterKey: productStore.filters.filter11,
        stateKey: isOpenDop7,
        setState: setOpenDop7,
        iconKey: expandIconDop7,
        lightCategory: filmaterials_accessories,
        should: shouldDisplay(filmaterials_accessories),
        onChange: handleSetMatAccessories,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      },
      {
        title: 'Дополнительно',
        filterKey: productStore.filters.filter3,
        stateKey: isOpenDop4,
        setState: setOpenDop4,
        iconKey: expandIconDop4,
        lightCategory: filtypesChand,
        should: shouldDisplay(filtypesChand),
        onChange: handleSetChandelierTypes,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      },
      {
        title: 'Материал холста',
        filterKey: productStore.filters.filter13,
        stateKey: isOpenDop3,
        setState: setOpenDop3,
        iconKey: expandIconDop3,
        lightCategory: filmaterials_host,
        should: shouldDisplay(filmaterials_host),
        onChange: handleSetPictureMaterial,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      },
      {
        title: 'Материал ковров',
        filterKey: productStore.filters.filter9,
        stateKey: isOpenDop5,
        setState: setOpenDop5,
        iconKey: expandIconDop5,
        lightCategory: filterCarpetMat,
        should: shouldDisplay(filterCarpetMat),
        onChange: handleSetCarpetMat,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      },
      {
        title: 'Материалы товаров для дома',
        filterKey: productStore.filters.filter10,
        stateKey: isOpenDop6,
        setState: setOpenDop6,
        iconKey: expandIconDop6,
        lightCategory: filmaterials_home,
        should: shouldDisplay(filmaterials_home),
        onChange: handleSetMaterialsHome,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      },
      {
        title: 'Стиль',
        filterKey: productStore.filters.filter6,
        stateKey: isOpenDop1,
        setState: setOpenDop1,
        iconKey: expandIconDop1,
        lightCategory: filstyles,
        should: shouldDisplay(filstyles) || shoudChapter,
        onChange: handleSetStyles,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      },
      {
        title: 'Стиль ковров',
        filterKey: productStore.filters.filter8,
        stateKey: isOpenDop,
        setState: setOpenDop,
        iconKey: expandIconDop,
        lightCategory: filstyles_carpet,
        should: shouldDisplay(filstyles_carpet),
        onChange: handleSetCarpStyles,
        FilComponent: TypeLightMB,
        classs: 'header__dropdown_wrap_lightCategory'
      }
    ];

    const filtersRange: IFiltersRanget[] = [
      { should: true, label: "Цена", minKey: productStore.filters.MinPrice, maxKey: productStore.filters.MaxPrice, range: PriceRange, handler: handleSetPrice },
      { should: shouldApplyDiameter, label: "Диаметр (см)", minKey: productStore.filters.MinDiameter, maxKey: productStore.filters.MaxDiameter, range: DiametrRange, handler: handleSetDiameter },
      { should: shouldApplyDlinna, label: "Длинна (см)", minKey: productStore.filters.MinLength, maxKey: productStore.filters.MaxLength, range: LengthRange, handler: handleSetLength },
      { should: shouldApplyDlinna, label: "Ширина (см)", minKey: productStore.filters.MinWidth, maxKey: productStore.filters.MaxWidth, range: WidthRange, handler: handleSetWidth },
      { should: shouldApplyVisota, label: "Высота (см)", minKey: productStore.filters.MinHeight, maxKey: productStore.filters.MaxHeight, range: HeightRange, handler: handleSetHeight },
      { should: shouldApplyOtstup, label: "Отступ от стены (см)", minKey: productStore.filters.MinIndent, maxKey: productStore.filters.MaxIndent, range: IndentRange, handler: handleSetIndent },
      { should: shouldApplyLampCount, label: "Количество лампочек (шт)", minKey: productStore.filters.MinLampCount, maxKey: productStore.filters.MaxLampCount, range: LampCountRange, handler: handleSetLampsCount },
    ];

    return (
      <div className={cls.catalogue__filter}>

        <div className={cls.filter_hh}>

          <h3 className={cls.filter__title}>
            Фильтры
          </h3>

          <button
            onClick={handleCloseFilters}
            className={`${cls.close_filter} ${cls.close_filter_block}`}
          >
              <span
                className={`${cls.close_filter__l} ${cls.close_filter__perv}`}
              ></span>
            <span
              className={`${cls.close_filter__l} ${cls.close_filter__vtor}`}
            ></span>
          </button>
        </div>

        <div className={cls.catalogue__border}>
          <div
            className={`${cls.filter__fil}`}
          >


            {filtersTypeLight.map(({
                                     FilComponent,
                                     classs,
                                     should,
                                     onChange,
                                     title,
                                     filterKey,
                                     stateKey,
                                     setState,
                                     iconKey,
                                     lightCategory
                                   }) => (
              should && (
                <div className={cls.product__fil} key={title}>
                  <div style={{paddingBottom: stateKey ? '' : '0'}} className={cls.product__fil_style}>
                    <div className={cls.product__fil_styler_ue}>
                      <h4 onClick={() => setState(!stateKey)} style={{marginBottom: stateKey ? '' : '10px'}}
                          className={cls.product__fil_style_head}>
                        {title}
                      </h4>
                      {iconKey &&
                          <span onClick={() => setState(!stateKey)} className={cls.expandIconitto}>{iconKey}</span>}
                    </div>
                    {!stateKey &&
                        <FilComponent
                            headeDropdownClass={classs ?? ""}
                            array={filterKey || []}
                            onChangeCategory={onChange}
                            lightCategory={lightCategory}
                        />
                    }
                  </div>
                </div>
              )
            ))}


            {filtersRange.map(({should, label, minKey, maxKey, range, handler}) =>
              (should && should) && (
                <div className={cls.filter__fil_price} key={label}>
                  <h4 className={cls.filter__fil_price_head}>{label}</h4>
                  <div className={cls.polsunok}>
                    <RangeComponent
                      changeValues={handler}
                      trigger={trigger}
                      minValue={minKey || range.minValue}
                      maxValue={maxKey || range.maxValue}
                      RangeValue={range}
                    />
                  </div>
                </div>
              ))}


            <div className={cls.product__fil}>
              <div className={`${cls.product__fil_style} ${cls.product__fil_style_sale}`}>
                <h4 className={cls.product__fil_style_head}>Скидка</h4>
                {/* <input
                  type="checkbox"
                  checked={isSaleChecked}
                  onChange={handleSetSale}
                /> */}
                <div className="flex items-center flex-shrink-0">
                  <label className="switch relative inline-block w-10 cursor-pointer">
                    <Switch checked={isSaleChecked} onChange={handleSetSale}/>
                  </label>
                </div>
              </div>
            </div>

            <div className={cls.product__fil}>
              <div className={cls.product__fil_primenit}>
                <button
                  onClick={() => handleGetProducts()}
                  className={cls.product__fil_primenit_search}
                >
                <span
                  className={`${cls.product__fil_primenit_btn} ${cls.primenit_btn}`}
                >
                  Применить фильтр
                </span>
                </button>
                <button
                  onClick={handleSetClear}
                  className={cls.product__fil_primenit_clear}
                >
                  Сбросить фильтр
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )})