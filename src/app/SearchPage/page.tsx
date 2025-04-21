"use client";

import React, { useEffect, useState } from "react";
import Breadcrumb from '@/components/ui/breadcrumb';
import cls from "./SearchPage.module.scss";
import Skeleton from "../../components/GoodsCatalogue/GoodsBlock/Skeleton";
import { ProdBlock } from "../../components/GoodsCatalogue/GoodsBlock/ProdBlock";
import { Pagination } from "../../components/Pagination";
import { COUNT_PER_PAGE } from "../../components/Pagination/pagination-lib";
import { useStore } from "@/hooks/useStore";
import {observer} from "mobx-react";
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";


const SearchPage = observer (() => {

  const pathname = usePathname();
  const router = useRouter();
  const store = useStore();
  const productStore = store.product;
  const [currentPage, setCurrentPage] = useState(1);

  const product = productStore.searchPageProduct;
  const productsSearchCount = productStore.searchPageTotalCount;
  const [searchedString, setSearchedString] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const search = productStore.filters.SearchQuery;


  const searchParams = useSearchParams();
  const searchPage = searchParams.get('Page');
  const searchPageNum = Number(searchPage);
  const [page, setPage] = useState(searchPageNum);

  useEffect(() => {
    if (typeof window !== undefined) {
      const searchedValue = searchParams.get('SearchQuery');
      if (searchedValue !== null) {
        setSearchedString(searchedValue);
        setSearchQuery(searchQuery);
      }
    }
  }, [searchParams]);
  // %2B

  useEffect(() => {

    productStore.getSearchProducts({
      SearchQuery: searchParams.get('SearchQuery') ?? '',
      From: page * COUNT_PER_PAGE,
      Count: COUNT_PER_PAGE,
    });
  }, [page, searchParams, searchPage]);


  useEffect(() => {
  //@ts-ignore
    setPage(searchParams.get(`Page`) === null ? 0 : +searchParams.get(`Page`))
  }, []);

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    newParams.set(`Page`, page.toString())
    router.push(`${pathname}?${newParams.toString()}`)
  }, [page]);

  const skeleton = [...new Array(8)].map((_, index) => <Skeleton key={index} />);


  return (

    <>
      <div className={`${cls.container} ${cls.chapter__mt_bread}`}>
        <Breadcrumb/>
      </div>
      <div className={`${cls.container} ${cls.searchpage__container}`}>
        <div className={cls.searchpage__mt}>
          <div className={cls.catalogue__product}>
            <h3 className={cls.allproduct_heading}>
              По запросу {`<${searchedString}>`}
            </h3>
            <ul className={cls.allproduct_goods_list}>
              {/*{productStore.isLoading && skeleton}*/}
              {product?.map((product) => (
                <ProdBlock key={product.id} product={product}/>
              ))}
            </ul>
          </div>
        </div>
        {(productsSearchCount ?? 0) >= COUNT_PER_PAGE && (
          <Pagination
            count={productsSearchCount}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            changePage={(num: number) => setPage(num - 1)}
            isLoading={productStore.isLoading}
          />
        )}
      </div>
    </>

  );
});

export default SearchPage;
