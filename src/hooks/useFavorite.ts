"use client"
import { useStore } from "./useStore";


export const useFavorite = () => {

  const store = useStore();
  const favoritesStore = store.favorites;
  const authStore = store.auth;

  const isAuth = !!authStore.userId;

  const handleAddToFavorite = (productId: string) => {
    if (isAuth) {
      favoritesStore.addFavorite(productId );
      return;
    }
    favoritesStore.addFavorite(productId);
  };

  const handleDeleteFromFavorite = (productId: string) => {
    if (isAuth) {
      favoritesStore.minusFavorite(productId);
      return;
    }
    favoritesStore.removeFavorite(productId);
  };

  return {
    // isLoading: isLoadingAdd || isLoadingDelete,            //Правильно ли я сделал ?
    isLoading: favoritesStore.isLoading,
    addToFavorite: handleAddToFavorite,
    deleteFromFavorite: handleDeleteFromFavorite,
  };
};
