"use client"
import React, { useEffect, useState } from 'react';
import Breadcrumb from '@/components/ui/breadcrumb';
import cls from './Cart.module.scss';
import CartItemBlock from './CartItemBlock';
import CartTotal from './CartTotal';
import CartEmpty from './CartEmpty';
import { useCart } from '../../hooks/useCart';
import { CartSendForm } from './CartSendForm/CartSendForm';
import { useStore } from '@/hooks/useStore';
import {toJS} from "mobx";
import {observer} from "mobx-react";
import {useRouter} from 'next/navigation';

const Cart: React.FC = observer(() => {

  const store = useStore();
  const cartStore = store.cart;
  const productStore = store.product;
  const authStore = store.auth;

  const [isSent, setSent] = useState(false);

  const isAuth = !!authStore.userId;

  useEffect(() => {
    if(authStore.isAuth) {
      cartStore.getUserCart();
    }else {
      cartStore.getUserLocalCart();
    }
  }, []);

  const cart = cartStore.items.map((cartItem) => {
      const count = store.cart.cart.find((countItem) => countItem.id === cartItem?.id)?.count || 0;
      return { ...cartItem, count: count };
    });

    const { clearCart, isLoading, addToCart } = useCart();
    const onClickClear = () => {
    if (window.confirm('Очистить корзину ???')) {
      clearCart();
    }
  };
  
  const localCart = cartStore.cart;
  
  useEffect(() => {
    cartStore.items = [];
    console.log(cartStore.cart);
    cartStore.cart.length > 0 &&
    cartStore.cart.map(
      (row) =>
      productStore.getDetProduct({ ProductId: row.id }).then((pld) => {
        //@ts-ignore
        cartStore.addItem(pld?.data);
      }),
      );
    }, [cartStore.cart]);

    useEffect(() => {
      if (isAuth && authStore.isLoading) {
      localCart &&
      localCart.map((row) => !cart.map((item) => item.id).includes(row.id) && addToCart(row.id));
    }
  }, [isAuth, authStore.isLoading]);

  return (
    <div className={cls.section_cart}>
        <div className={`${cls.cart_container} ${cls.container}`}>
          {localCart.length === 0 && typeof window !== 'undefined'
            ? <CartEmpty />
            : (
              <>
                <Breadcrumb />
                <div className={cls.cart_header}>
                  <h3 className={cls.cart_title}>КОРЗИНА</h3>
                  <div className={cls.cart_clear}>
                    <button disabled={cartStore.isLoading} onClick={onClickClear} className={cls.cart_clear_desc}>
                      Очистить корзину
                    </button>
                  </div>
                </div>
                <div className={cls.cart_root}>
                  <div className={cls.cart_root_border}>
                    {cart.map((item: any) =>
                      item.count ? <CartItemBlock key={item.id} {...item} /> : undefined,
                    )}
                  </div>
                  <div className={`${cls.cart_root_border} ${cls.cart_root_itog}`}>
                    <CartTotal />
                  </div>
                  <p className={cls.cart_root_offer}>Оформление заказа</p>
                  <p className={`${cls.cart_root_desc} ${isSent ? cls.cart_root_desc_none : ''}`}>
                    Заполните пожалуйста форму, для составления заказа!
                  </p>
                  <CartSendForm isSent={isSent} setSent={setSent} />
                </div>
              </>
            )
          }
        </div>
      </div>
  );
});

export default Cart;
