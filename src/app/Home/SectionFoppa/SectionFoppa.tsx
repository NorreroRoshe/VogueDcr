"use client"
import React from 'react';
import s from './SectionFoppa.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {useStore} from "@/hooks/useStore";
import CategoryCardLoader from "@/components/ui/loaders/category-card-loader";
import {ROUTES} from "@/utils/routes";
import {observer} from "mobx-react";


export const SectionFoppa: React.FC = observer(() => {
  const store = useStore();

  const productStore = store.product;

  const product = productStore.foppaBrandProduct;


  return (
    <section className={s.section_foppa}>
      <Link className={s.foppa_back} href="/">
        <div className={s.foppa_firstbox1}></div>
        <div className={s.foppa_container}>
          <p className={s.foppa_desc_text}>
            Foppapedretti - это итальянский бренд, который производит высококачественную и удобную
            мебель и аксессуары для дома. <span>Фабрика использует только лучшие материалы и технологии,
              чтобы создавать удобные и практичные товары, которые будут радовать вас каждый день.</span>
          </p>
        </div>
      </Link>
      <h2 className={s.product_heading}>Популярные товары</h2>
      <div className={`${s.foppa_collection__items} container`}>
        {productStore.isLoading
          ? Array.from({ length: 5 }).map((_, idx) => {
            return (
              <CategoryCardLoader key={idx} uniqueKey={`category-card-${idx}`} />
            );
          })
        : product?.map((product, i) =>
          <div
            key={`ключ-продукта-${product.id}`}
            className={s.foppa_collection__item}>
            <Link
              className={s.foppa_product__link}
              href={`${ROUTES.PRODUCT}/${product.id}`}
              target="_blank">
              <div className={s.foppa_product__box}>
                <Image
                  className={s.foppa_product__image}
                  width="270"
                  height="230"
                  alt={product.name || 'Product Image'}
                  src={
                  // process.env.NEXT_PUBLIC_PHOTO_URL1 +
                    product?.files?.[0]?.url}
                />
              </div>
            </Link>
              <div className={s.foppa_prod_vero}>
                <p className={s.foppa_product__vendor}>
                  {product.name} <span className={s.foppa_product__vendor_in}> {product.article} </span>
                </p>
                <Link target="_blank"
                      href={`Brands/${product.brand?.id}/${product.collection?.id}`}
                      className={s.foppa_product__title}>
                  Коллекция: {product.collection?.name}
                </Link>
              </div>
          </div>
        )}
      </div>
      {productStore.isLoading
        ? (
          <></>
        ):
        <Link className={s.foppa_icon_btn} href={`/Brands/6`}>
          <span className={s.foppa_icon_desc}>
            см. больше <span>&gt;</span>
          </span>
        </Link>
      }
    </section>
  );
});
