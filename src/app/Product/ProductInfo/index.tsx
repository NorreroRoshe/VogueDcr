"use client"
import { useState } from 'react';
import cls from './ProductInfo.module.scss';
import RelatedProductFeed from '@/components/product/feeds/related-product-feed';
import RelatedProductFeedBrand from '@/components/product/feeds/related-product-feed-brands';
import { RelatedBreakpoints } from '@/components/product/product-popup';
import { ProductInd } from './ProductInd';
import Breadcrumb from '@/components/ui/breadcrumb';
import { Product } from '@/types/Product/product.types';
import {observer} from "mobx-react";


type ProductInfoProps = {
  detProduct: Product;
};

export const ProductInfo: React.FC<ProductInfoProps> = observer(({ detProduct }) => {
  
  return (
    <div className={`${cls.product_info_container} ${cls.container}`}>
      <ProductInd detProduct={detProduct} />
      <div className={cls.product_info_feed}>
        <RelatedProductFeed
          sectionHeading='Товары из этой коллекции'
          collid={detProduct?.collection?.id}
          brid={detProduct?.brand?.id}
          carouselBreakpoint={RelatedBreakpoints}
          className="mb-0.5 md:mb-2 lg:mb-3.5 xl:mb-4 2xl:mb-6"
        />
      </div>
      <RelatedProductFeedBrand
        sectionHeading='Товары от этого бренда'
        id={detProduct?.brand?.id}
        carouselBreakpoint={RelatedBreakpoints}
        className="mb-0.5 md:mb-2 lg:mb-3.5 xl:mb-4 2xl:mb-6"
      />
    </div>
  );
});

export default ProductInfo;