"use client"
import React, { useEffect, useState } from "react";
import cls from "./CollectionsPage.module.scss";
import { ProdBlock } from "@/components/GoodsCatalogue/GoodsBlock/ProdBlock";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Pagination } from "@/components/Pagination";
import { COUNT_PER_PAGE } from "@/components/Pagination/pagination-lib";
import Breadcrumb from '@/components/ui/breadcrumb';
import { useStore } from "@/hooks/useStore";
import {observer} from "mobx-react";


const CollectionPage: React.FC = observer(() => {

  const store = useStore();
  const productStore = store.product;
  const collectionStore = store.collection;

  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const collectionId = pathname.split('/').pop();

  const collection = collectionStore.collections.find((col) => col.id === collectionId);

  useEffect(() => {
    productStore.getCollectionProducts({
      CollectionsId: collectionId,
      From: page * COUNT_PER_PAGE,
      Count: COUNT_PER_PAGE,
    });
  }, [collectionId, collection, page]);


  return (
    <>
      <div className={cls.chapter__mt_bread}>
        <Breadcrumb/>
      </div>
      <div className={`${cls.container} ${cls.brand__container}`}>
        <div className={`${cls.brand__mt} ${cls.fullWidth}`}>
          <h2 className={cls.brand__title}>Коллекция {productStore?.collectionName}</h2>
          {/* {isLoading && <p>Загрузка...</p>} */}
          {/* TODO фикс */}
          <ul className={cls.allproduct_goods_list}
          >
            {productStore.collectionItems?.map((prod) => (
              <ProdBlock key={prod.id} product={prod}/>
            ))}
          </ul>
          {(productStore?.totalCount ?? 0) >= COUNT_PER_PAGE && (
            <Pagination
              count={productStore?.totalCount || 0}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              changePage={(num: number) => setPage(num - 1)}
              isLoading={productStore.isLoading}
            />
          )}
        </div>
      </div>
    </>
  );
});

export default CollectionPage;