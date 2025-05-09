"use client"

import React, {useEffect} from 'react';
import cls from './Cart.module.scss';
import { useCart } from '../../hooks/useCart';
import {observer} from "mobx-react";
import {useStore} from "@/hooks/useStore";

type CIBProps = {
  id: string;
  count: number;
};

const CartCounter: React.FC<CIBProps> = observer(({ id, count }) => {
  const store = useStore();
  const cartStore = store.cart;
  const authStore = store.auth;
  const isAuth = !!authStore.userId;

  const handleAddToCart = (productId: string) => {
    if (isAuth) {
      cartStore.addProductToCart(productId);
      return;
    }

    cartStore.addLocalItem(productId);
  };

  const handleDeleteFromCart = (productId: string) => {
    if (isAuth) {
      cartStore.minusProductCart(productId, false);
      return;
    }
    cartStore.minusItemFromCart(productId);
  };

  const handleDeleteFullProductCart = (productId: string) => {
    if (isAuth) {
      cartStore.minusProductCart(productId, true );
      return;
    }
    cartStore.deleteProductFromCart(productId);
  };

  const handleClearCart = () => {
    if (isAuth) {
      cartStore.clearUserCart();
      return;
    }
    cartStore.clearCart();
  };

  useEffect(() => {


  }, [cartStore.isLoading]);

  const onClickPlus = () => {
    handleAddToCart(id);
  };

  const onClickMinus = () => {
    //Здесь мы говорим, если товар в корзине уменьшаем то он может максимум доходить до 0 меньше не может
    handleDeleteFromCart(id);
  };

  return (
    <div className={cls.root_main_count}>
      <button
        disabled={count === 1 || cartStore.isLoading}
        onClick={onClickMinus}
        className={`${cls.count_desc_minus} ${cls.count_desc}`}></button>
      <span className={cls.count_desc}>{count}</span>
      <button
        disabled={cartStore.isLoading}
        onClick={onClickPlus}
        className={`${cls.count_desc_plus} ${cls.count_desc}`}></button>
    </div>
  );
});

export default CartCounter;
