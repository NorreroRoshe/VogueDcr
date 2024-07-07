import Counter from '@/components/ui/counter';
import cls from '@/components/GoodsCatalogue/GoodsCatalogue.module.scss';
import { useCart } from '@/hooks/useCart';
import { Product } from '@/types/Product/product.types';
import {observer} from "mobx-react";

interface Props {
  cartCount: any;
  product: Product;
}

export const AddToCart = observer(({ cartCount, product }: Props) => {
  const { addToCart, deleteFromCart, isLoading } = useCart();

  const handleAddToCart = () => {
    addToCart(product.id)
  }

  const handleDeleteFromCart = () => {
    deleteFromCart(product.id)
  }

  return (
    <>
      {cartCount > 0 ? (
        // <Counter className={cls.add_to_coun} product={product} />
        <button
        onClick={()=>handleDeleteFromCart()}
        className={`${cls.cartlike__btn1} ${ cartCount ? cls.cartlike__btn1_active : ''}`}>
        </button>
      ) : (
        <button
          onClick={()=>handleAddToCart()}
          className={`${cls.cartlike__btn1} ${
            cartCount ? cls.cartlike__btn1_active : ''
          }`}></button>
      )}
    </>
  );
});
