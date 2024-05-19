"use client"

import React from "react";
import cls from "./Cart.module.scss";
import { useStore } from "@/hooks/useStore";
import {observer} from "mobx-react";

const CartTotal: React.FC = observer(({ }) => {


  const store = useStore();
  const cartStore = store.cart;

  const totalPrice = cartStore.items.reduce(
    (sum, curr) => sum + (cartStore.cart.find((item) => item.id === curr.id)?.count ?? 1) * curr.price,
    0
  );

  const totalDiscountPrice = cartStore.items.reduce((sum, curr) => {
    const truePrice = curr.price - (curr.price * curr.discount) / 100;
    return truePrice * (cartStore.cart.find((item) => item.id === curr.id)?.count ?? 1) + sum;
  }, 0);

  const totalCount = cartStore.items.reduce((sum, curr) => sum + (cartStore.cart.find((item) => item.id === curr.id)?.count ?? 1), 0);


  const truePrice = totalPrice - totalDiscountPrice;
  console.log(totalPrice === totalPrice, 'cart')


  return (
    <div className={`${cls.root_main} ${cls.root_main_sh}`}>
      <div
        className={`${cls.root_main_right} ${cls.root_main_prices_total} ${cls.root_main_prices_total_st}`}
      >
        <div
          className={`${cls.root_main_prices} ${cls.prices_total_fb} ${cls.prices_total_st}`}
        >
          <h4 className={cls.cart_title_total}>Итого позиций: </h4>
          <div
            className={`${cls.root_main_price} ${cls.root_main_price_total}`}
          >
            <span
              className={`${cls.price_desc} ${cls.price_desc_total} ${cls.price_desc_totals}`}
            >
              {totalCount} шт.
            </span>
          </div>
        </div>
        <div
          className={`${cls.root_main_prices} ${cls.prices_total_fb} ${cls.prices_total_fbs}`}
        >
          <h4 className={cls.cart_title_total}>Итого сумма: </h4>
          {!(totalPrice === totalDiscountPrice) ? (
            <div
              className={`${cls.root_main_price} ${cls.root_main_price_total}`}
            >
              <span
                className={`${cls.price_discount} ${cls.price_discount_total}`}
              >
                {totalPrice} ₽.
              </span>
              <span className={`${cls.price_desc} ${cls.price_desc_total}`}>
                {totalDiscountPrice}
                <span>₽.</span>
              </span>
              <span className={cls.price_econom_total}>
                Экономия {truePrice} ₽.
              </span>
            </div>
          ) : (
            <div
              className={`${cls.root_main_price} ${cls.root_main_price_total}`}
            >
              <span className={`${cls.price_desc} ${cls.price_desc_total}`}>
                {totalDiscountPrice} <span>₽.</span>
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});

export default CartTotal;
