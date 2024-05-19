"use client"


import React, { useEffect } from 'react';
import cls from './Favourites.module.scss';
import { useCart } from '../../hooks/useCart';
import { Product } from '@/types/Product/product.types';
import { useStore } from '@/hooks/useStore';
import {observer} from "mobx-react";

interface IFavAddCart {
  product: Product;
}

export const FavAddCart: React.FC <IFavAddCart> = observer(({ product }) => {

  
  const store = useStore();
  const cartStore = store.cart;

  const { addToCart, deleteFromCart } = useCart();

  const cartCount = cartStore.cart.find((row) => row.id === product.id)?.count || 0;

  const handleAddToCart = () => {
    addToCart(product.id)
  }

  const handleDeleteFromCart = () => {
    deleteFromCart(product.id)
  }

  return (
    <>
      {cartCount > 0 ? (
        <div
          onClick={() => handleDeleteFromCart()}
          className={cls.item_unit_button}
          style={{backgroundColor: 'white', color: '#000', cursor: 'auto'}}>
          Удалить из корзины
        </div>
      ) : (
        <div
          onClick={() => handleAddToCart()}
          className={cls.item_unit_button}>
          Добавить в корзину
        </div>
      )}
    </>
  );
});

export default FavAddCart;
