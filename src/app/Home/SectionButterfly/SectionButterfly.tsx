"use client"
import React from 'react';
import s from './SectionButterfly.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import {useStore} from "@/hooks/useStore";
import {ROUTES} from "@/utils/routes";
import CategoryCardLoader from "@/components/ui/loaders/category-card-loader";
import {observer} from "mobx-react";
import {categoryPlaceholder} from "@/assets/placeholders";

export const SectionButterfly: React.FC = observer(() => {
  const store = useStore();

  const productStore = store.product;

  const product = productStore.buttBrandProduct;

  return (
    <section className={s.section_butterfly}>
      <Link className={s.butterfly_back} href="/">
        <div className={s.butterfly_firstbox1}></div>
        <div className={s.butterfly_container}>
          <p className={s.butterfly_desc_text}>
            ButterflyL.C. - это Российская фабрика светильников, которая производит
            высококачественные светильники с привлекательным дизайном. Вся продукция производится в
            России с использованием только лучших материалов и эксклюзивного дизайна.
          </p>
        </div>
      </Link>
      <h2 className={s.product_heading}>Популярные товары</h2>
      <div className={`${s.butterfly_collection__items} container`}>
        {productStore.isLoading
          ? Array.from({ length: 5 }).map((_, idx) => {
            return (
              <CategoryCardLoader key={`category-card-${idx}`} uniqueKey={`category-card-${idx}`} />
            );
          })
          : product?.map((product, i) =>
            <div
              key={`ключ-продукта-${product.id}`}
              className={s.butterfly_collection__item}>
              <Link
                className={s.butterfly_product__link}
                href={`${ROUTES.PRODUCT}/${product.id}`}
                target="_blank">
                <div className={s.butterfly_product__box}>
                  <Image
                    className={s.butterfly_product__image}
                    width="270"
                    height="230"
                    alt={product.name || 'Product Image'}
                    src={
                    // process.env.NEXT_PUBLIC_PHOTO_URL1 +
                      product?.files?.[0]?.url}
                  />
                </div>
              </Link>
                <p className={s.butterfly_product__vendor}>
                  {product.name} <span className={s.butterfly_product__vendor_in}> {product.article} </span>
                </p>
                <Link target="_blank"
                      href={`Brands/${product.brand?.id}/${product.collection?.id}`}
                      className={s.butterfly_product__title}>
                  Коллекция: {product.collection?.name}
                </Link>
            </div>
          )}
      </div>
      {productStore.isLoading
        ? (
          <></>
        ):
        <Link className={s.butterfly_icon_btn} href={`/Brands/5`}>
          <span className={s.butterfly_icon_desc}>
            см. больше <span>&gt;</span>
          </span>
        </Link>
      }


    </section>
  );
});
