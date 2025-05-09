"use client"
import React from 'react';
import emptyFavImg from '@/assets/img/bookmark-empty.svg';
import cls from '@/app/Cart/Cart.module.scss';
import Image from 'next/image';
import Breadcrumb from '@/components/ui/breadcrumb';
import {useRouter} from "next/navigation";

const FavEmpty: React.FC = () => {

  const { push } = useRouter();

  return (
    <>
      <div className={`${cls.container} ${cls.container_braed}`}>
        <Breadcrumb/>
      </div>
        <div className={`${cls.container__cart} ${cls.container__cartwqer}`}>
          <div className={cls.container_mt}>
            <div className={`${cls.cart} ${cls.cart__empty}`}>
              <h2>
                В избранных пусто
              </h2>
              <p>
                Вероятней всего, вы ещё не добавили стильный светильник в избранные : )
                <br/>
              </p>
              <Image src={emptyFavImg} alt="Empty fav" style={{marginTop: '5px'}}/>
              <button onClick={() => push('/Chapter')} className={`${cls.button} ${cls.button__black}`}>
                <span>К покупкам</span>
              </button>
            </div>
          </div>
        </div>
      </>
      );
      };

      export default FavEmpty;
