"use client"
import { CartItem, ICartLocalState } from "../Cart/cart.types";

export interface ICartStore {
  totalCount: number;
  totalPrice: number;
  totalDiscountPrice: number;
  items: CartItem[];
  cart: ICartLocalState;
  isLoading: boolean;
  
  addLocalItem: (localItemProd: string) => void;
  addItem: (addItemProd: CartItem) => void;
  deleteProductFromCart: (deleteProductFromCartProd: string) => void;
  minusItemFromCart: (minusItemFromCartProd: string) => void;
  removeItem:(removeItemProd: string) => void;
  clearCart: () => void;
  getUserCart: () => void;
  clearUserCart: () => void;
  addProductToCart: (productId: string) => void;
  minusProductCart: (productId: string, isRemovingAll?: boolean) => void;

  
}