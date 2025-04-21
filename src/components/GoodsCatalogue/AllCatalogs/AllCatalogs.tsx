'use client'
import React from "react";
import { CatalogCategories } from "./CatalogCategories";
import { GoodsTitleCategories } from "./GoodsTitleCategories";
import {observer} from "mobx-react";
import {usePathname, useSearchParams} from "next/navigation";
import {ICategoryType} from "@/types/Product/product.dtos";
import {IFilterProps} from "@/components/GoodsCatalogue/FilterBlock/FilterBlock";
import {useStore} from "@/hooks/useStore";

export type IAllCatalogs = {
  ProductTypesArray: number[];
  CategoriesArray: number[];
  foundCategoryId: number | undefined;
  filteredCategories: ICategoryType[];
};
export const AllCatalogs: React.FC<IAllCatalogs> = observer(
  ({ ProductTypesArray, CategoriesArray, filteredCategories, foundCategoryId }) => {

  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter(Boolean); // Разбиваем путь на части

  const searchParams = useSearchParams();

  const store = useStore();
  const productStore = store.product;


  // const filterProdTyp = productStore.prodTypFil;
    const filterProdTyp = productStore.prodTypFil.filter((_, index) => index !== 1 && index !== 2);



  return (
    <>
        {pathSegments.length === 1 ? <CatalogCategories ProductTypesArray={ProductTypesArray} sitePathCategory={filterProdTyp} shouldDisplay={false} /> : <></>}
        {pathSegments.length === 2 ? <CatalogCategories ProductTypesArray={ProductTypesArray} sitePathCategory={filteredCategories} shouldDisplay={true} /> : <></>}
        {pathSegments.length === 3 ? <GoodsTitleCategories CategoriesArray={foundCategoryId} /> : <></>}
    </>
  );
});
