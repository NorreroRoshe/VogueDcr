"use client"
import CartService from '@/api/Cart/CartService';
import { CartItem, ICartLocalState } from '@/types/Cart/cart.types';
import { ICartStore } from '@/types/Stores/ICartStore';
import {makeAutoObservable, observable} from 'mobx';
import Cookies from 'js-cookie';

const KEY = "cart";

const getCart = (): ICartLocalState => {
  if (typeof window !== "undefined") {
    return JSON.parse(Cookies.get(KEY) || JSON.stringify([]));
  }
  return [];
};

const updateArr = <T>(index: number, elem: T, array: T[]): T[] => [
  ...array.slice(0, index),
  elem,
  ...array.slice(index + 1, array.length),
];

const delFromArr = <T>(index: number, array: T[]) => [
  ...array.slice(0, index),
  ...array.slice(index + 1, array.length),
];


const getProduct = (cart: ICartLocalState, productId: string) => {
  const productInd = cart.findIndex((row) => row.id === productId);
  return {
    productInd,
  };
};

export class CartStore implements ICartStore {

  items: CartItem[] = [];
  totalCount: number = 0;
  totalDiscountPrice: number = 0;
  totalPrice: number = 0;
  cart: ICartLocalState = observable.array([]);
  isLoading: boolean = false;


  constructor() {
    makeAutoObservable(this);
  }
  addLocalItem(localItemProd: string) {
    const productId = localItemProd;
    const cart = this.cart;
    const { productInd } = getProduct(cart, productId);

    if (productInd !== -1) {
      const productCart = cart[productInd];
      this.cart[productInd]= { ...productCart, count: productCart.count + 1 }

    if (typeof window !== 'undefined') {
      localStorage.setItem(KEY, JSON.stringify(this.cart));
    }
    } else {

      this.cart = [...this.cart, {
        count: 1,
        id: productId,
      }]
      if (typeof window !== 'undefined') {
        localStorage.setItem(KEY, JSON.stringify(this.cart));
      }
    }
  };

  addItem(addItemProd: CartItem) {
    if(!this.items.find((item)=> item.id=== addItemProd.id)){
      this.items.push(addItemProd)
    }
  };
  deleteProductFromCart(deleteProductFromCartProd: string) {
    const productId = deleteProductFromCartProd;
    const cart = this.cart;
    const { productInd } = getProduct(cart, productId);

    if (productInd !== -1) {
      this.cart.splice(productInd,1);
    if (typeof window !== 'undefined') {
      localStorage.setItem(KEY, JSON.stringify(this.cart));
    }
      const itemInd = this.items.findIndex((item) => item?.id === productId);
      if (itemInd !== -1) this.items.splice(itemInd,1);
    }
  };
  minusItemFromCart(minusItemFromCartProd: string) {
    const productId = minusItemFromCartProd;
    const cart = this.cart;
    const { productInd } = getProduct(cart, productId);

    if (productInd !== -1) {
      const productCart = cart[productInd];

      this.cart[productInd]= { ...productCart, count: productCart.count - 1 }
      if (typeof window !== 'undefined') {
        localStorage.setItem(KEY, JSON.stringify(this.cart));
      }
      this.items.map((item) =>
        item.id === productId ? { ...item, count: item.count - 1 } : item
      );
    }
  };

  removeItem(removeItemProd: string) {
    const findItem = this.items.findIndex(
      (obj) => obj.id === removeItemProd
    ); // с помощю индекс находим индекс элемента
    this.items.splice(findItem, 1); //С помощю сплайс удалит элемент
  };
  clearCart() {
    if (typeof window !== 'undefined') {
    localStorage.setItem(KEY, JSON.stringify([]));}
    this.cart = [];
    this.items = [];
  };

  async getUserCart() {
    this.isLoading = true;
    const response = await CartService.getUserCart();

    if ('data' in response) {
      this.cart = response.data.products.map((item) => ({
        count: item.count,
        id: item.id,
      }));
      this.items = response.data.products.map((product) => ({
        ...product,
      }));
    }
    this.isLoading = false;
  };

   getUserLocalCart() {
     this.isLoading = true;
     const carts =JSON.parse(localStorage.getItem('cart') ?? '[]');
      // @ts-ignore
       this.cart = carts.map((item) => ({
        count: item.count,
        id: item.id,
      }));
     // @ts-ignore
     this.items = carts.map((product) => ({
       ...product,
     }));
     this.isLoading = false;
  };

  async clearUserCart() {
    this.isLoading = true;
    const response = await CartService.clearUserCart();

    if ('data' in response) {
    this.cart = [];
    this.items = [];
    if (typeof window !== 'undefined') {
      localStorage.setItem(KEY, JSON.stringify([]));
    }
    }
    this.isLoading = false;
  }


  async addProductToCart(productId: string) {
    this.isLoading = true;
    const response = await CartService.addProductToCart(productId);

    if ('data' in response) {
      const ind = this.cart.findIndex((item) => productId === item.id);

      if (ind === -1) {
        this.cart = [
          ...this.cart,
          {
            id: productId,
            count: 1,
          },
        ];
        return;
      }
      this.cart[ind] = {
        id: productId,
        count: this.cart[ind].count + 1,
      };
    }
    this.isLoading = false;
  }

  async minusProductCart(productId: string, isRemovingAll?: boolean) {
    this.isLoading = true;
    const response = await CartService.minusProductCart(productId, isRemovingAll);
    if ('data' in response) {
      const ind = this.cart.findIndex((item) => productId === item.id);

      if (isRemovingAll) {
        this.cart.splice(ind,1);
        return;
      }
      this.cart[ind].count = this.cart[ind].count - 1
    }
    this.isLoading = false;
  }
};