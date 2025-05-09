"use client"
import { Product } from '@/types/Product/product.types';
import cls from './SaleBunner.module.scss';
import Link from 'next/link';
import Image from "next/image";
import {categoryPlaceholder} from "@/assets/placeholders";

export interface ISaleProps {
  product: Product;
}

export const SaleBunnerProduct: React.FC<ISaleProps> = ({ product }) => {
  const imageUrl = product?.files?.[0]?.url;
  const imageUrlsdfdsd = imageUrl ? process.env.NEXT_PUBLIC_PHOTO_URL1 + imageUrl : categoryPlaceholder;


  // const image = product.files
  //   ? product.files[0]
  //   : {
  //       name: "",
  //       url: "",
  //     };
  return (
    <Link key={product.id} href={`/Product/${product.id}`} className={cls.saleb_slider}>
      <span className={cls.allproduct_product_label_ring}>
        <span className={cls.allproduct_product_label_ring_desc}>
          скидка <span>-{product.discount}%</span>
        </span>
        <span className={cls.allproduct_product_label_ring_icons}></span>
      </span>
      <Image width={500} height={500} src={imageUrl} alt={product.files[0].name} className={cls.saleb_img} />
      {/* <span className={cls.slider_nal}>В наличии: {product.availability} шт.</span> */}
      <h4 className={cls.slider_header}>{product.article}</h4>
      <p className={cls.slider_price}>{product.price}руб.</p>
    </Link>
  );
};

export default SaleBunnerProduct;