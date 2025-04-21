'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import cls from '../GoodsCatalogue.module.scss';
import { useFavorite } from '../../../hooks/useFavorite';
import { AddToCart } from '@/components/product/add-to-cart';
import { useModalAction } from '@/components/common/modal/modal.context';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; // путь к slick.css
import 'slick-carousel/slick/slick-theme.css'; // путь к slick-theme.css
import PP from '@/assets/placeholders/product-placeholder.png';
import Image from '@/components/ui/image';
import { useStore } from '@/hooks/useStore';
import { Product } from '@/types/Product/product.types';
import {observer} from "mobx-react";

type ProdBlockProps = {
  product: Product;
};

export const ProdBlock: React.FC<ProdBlockProps> = observer(({ product }) => {

  const store = useStore();
  const productStore = store.product
  const favoritesStore = store.favorites
  const cartStore = store.cart
  const authStore = store.auth

  const photoUrlBase = process.env.NEXT_PUBLIC_PHOTO_URL1;
  // const imageUrl = product.urls ? `${product.urls[0]}` : '';    //${photoUrlBase}
  const imageUrl = product?.files?.[0]?.url;
  const imageUrlsdfdsd = photoUrlBase + imageUrl;

// console.log(imageUrlsdfdsd,'imageUrlimageUrlimageUrl')
  // const isFavorite = useAppSelector((state) => selectFavoritesItemById(state, product.id));
  const isFavorite = !!favoritesStore.ids?.find((obj) => obj === product.id)

  const { addToFavorite, deleteFromFavorite } = useFavorite();
  const { openModal } = useModalAction();


  // const cartCount = useAppSelector((state) => cartProductCountByIdSelector(product.id, state));
  const cartCount = cartStore.cart.find((row) => row.id === product.id)?.count || 0;

  const handleChangeFav = () => {
    isFavorite ? deleteFromFavorite(product.id) : addToFavorite(product.id);
  };

  const handlePopupView = () => {
    openModal('PRODUCT_VIEW', { productId: product.id });
  }

  const CustomNextArrow = (props: any) => {
    const { className, onClick } = props;
    return <div className={`${className} ${cls.custom_next}`} onClick={onClick} />;
  };

  const CustomPrevArrow = (props: any) => {
    const { className, onClick } = props;
    return <div className={`${className} ${cls.custom_prev}`} onClick={onClick} />;
  };

  function handleLogin() {
    openModal("LOGIN_VIEW");
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    // autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    // centerMode: true,
    // centerPadding: '205px',
  };

  let discountPercentage = (product.discount * product.price) / 100;
  const mainPrice = Math.round(product.price - discountPercentage)


  return (
    <li className={cls.allproduct_goods_item}>
      <Link key={product.id} href={`/Product/${product.id}`} className={cls.allproduct_goods_link}>
        <span className={cls.allproduct_goods_box}>
          {/* <Slider className={cls.main_slider} {...sliderSettings}>
            <div className={`${cls.hero_slider} ${cls.slider1}`} style={{display: 'block'}}>
              <img src={imageUrl} alt="" className={cls.allproduct_goods_img} />
            </div>
            <div className={`${cls.hero_slider} ${cls.slider1}`}>
              <img src={imageUrl} alt="" className={cls.allproduct_goods_img} />
            </div>
          </Slider> */}
          {!!imageUrl ? (
            // <img
            // src={imageUrl}
            // alt=""
            // className={cls.allproduct_goods_img} />
            <Image
              src={imageUrl}
              alt="product"
              // quality={70}
              width={425}
              height={301}
              layout="intrinsic" // Позволяет использовать оригинальный размер изображения
              className={cls.allproduct_goods_img}/>
          ) : (
            <div className="w-auto flex items-center justify-center">
              {/* <img src={PP} alt='404!'/> */}
              <Image src={PP} alt={'404!'} className={cls.allproduct_goods_img}/>
            </div>
          )}
          {!!product.discount && (
            <span className={cls.allproduct_product_label_ring}>
            <span className={cls.allproduct_product_label_ring_desc}>
              <span>&nbsp;- {product.discount}%</span>
            </span>
              {/* <span className={cls.allproduct_product_label_ring_icons}> */}
              {/* </span> */}
          </span>
          )}
          <span className={cls.allproduct_goods_nal}>
          {product.availability > 0 ? (
            <span className={cls.goods_nal_desc} style={{color: 'green'}}>В наличии
              {/*: {product.availability} шт.*/}
                </span>
          ) : (
            <span className={cls.goods_nal_desc} style={{color: '#b62908'}}>Предзаказ</span>
          )}

          </span>
        </span>
        {/*<button*/}
        {/*  onClick={authStore.isAuth ? handleChangeFav : handleLogin}*/}
        {/*  className={`${cls.cartlike__btn2} ${isFavorite ? cls.cartlike__btn2_active : ''}`}*/}
        {/*/>*/}
        <div className={cls.allproduct_goods_artikul_wrapp}>

          <div className={cls.allproduct_goods_artikul_nalnenal}>
            <p className={cls.allproduct_goods_artikul}>{product.name}
              &nbsp;{product.article}</p>
            <span className={`${cls.allproduct_goods_nal} ${cls.allproduct_goods_nal_ot}`}>
              {product.availability > 0 ? (
                <span className={cls.goods_nal_desc} style={{color: 'green'}}>{product.availability} шт.</span>
              ) : (
                <span className={cls.goods_nal_desc} style={{color: '#b62908'}}>Предзаказ</span>
              )}
            </span>
          </div>
          {/* <p className={`${cls.allproduct_goods_artikul} ${cls.allproduct_goods_artikul_dn} ${cls.allproduct_goods_artikul_padin}`}>{product.article}</p> */}
        </div>
      </Link>
      <div className={cls.allproduct_goods_activity}>

        <div className={cls.allproduct_goods_activity_wrapp}>
          <p className={cls.goods_activity_price}>{mainPrice} <span>₽</span></p>
          {!!product.discount && (
            <div className={cls.allproduct_goods_activity_wrapp_not}>
              <p className={`${cls.goods_activity_price} ${cls.goods_activity_price_not}`}>{product.price} ₽</p>
              <span>-{product.discount}%</span>
            </div>
          )}
        </div>
        <div className={cls.goods_activity_cartlike_wrapo}>
          <div className={cls.goods_activity_cartlike}>
            <AddToCart cartCount={cartCount} product={product}/>
            <button
              onClick={authStore.isAuth ? handleChangeFav : handleLogin}
              className={`${cls.cartlike__btn2} ${isFavorite ? cls.cartlike__btn2_active : ''}`}
            />

            <button
              onClick={handlePopupView}
              className={`${cls.cartlike__btn3} ${isFavorite ? cls.cartlike__btn3_active : ''}`}
            ></button>
          </div>
        </div>
      </div>

      <div
        onClick={handlePopupView}
        className={cls.cartlike__btn3_bolhi_wrapp}>
        <button
          className={`${cls.cartlike__btn3} ${cls.cartlike__btn3_bolhi} ${isFavorite ? cls.cartlike__btn3_active : ''}`}></button>
      </div>

    </li>
  );
});