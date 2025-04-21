//
// 'use client'
// import {useStore} from "@/hooks/useStore";
// import {usePathname} from "next/navigation";
//
// type ICategoryNames = {
//   Lights: { name: string; id: number; }[];
//   Furniture: { name: string; id: number; }[];
//   Mirrors: { name: string; id: number; }[];
//   Carpets: { name: string; id: number; }[];
//   TovariDlyaDoma: { name: string; id: number; }[];
//   Accessories: { name: string; id: number; }[];
//   Paints: { name: string; id: number; }[];
// };
//
//
// export const transliterate = (text: string) => {
//   const map: { [key: string]: string } = {
//     "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "yo",
//     "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m",
//     "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
//     "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "sch", "ъ": " ",
//     "ы": "y", "ь": " ", "э": "e", "ю": "yu", "я": "ya"
//   };
//
//   return text.split("")
//     .map(char => map[char.toLowerCase()] || char)
//     .join("")
//     .replace(/\s+/g, '');
// };
//
// export const getCategories = (): ICategoryNames => {
//   const store = useStore();
//   const productStore = store.product;
//   const filterСategories = productStore.categoriesFil;
//
//
//   const categoryNames = (start: number, end: number) => {
//     return filterСategories
//       .slice(start, end)
//       .map(category => transliterate(category.name));
//   };
//
//
//   const categoryNames1 = (start: number, end: number) => {
//     return filterСategories
//       .slice(start, end)
//       .map((category, index) => ({
//         name: transliterate(category.name),
//         id: category.id
//       }));
//   };
//
//
//   return {
//     Lights: categoryNames1(0,9),
//     Furniture: categoryNames1(10,19),
//     Mirrors: categoryNames1(19,29),
//     Carpets: categoryNames1(29,35),
//     TovariDlyaDoma: categoryNames1(35,47),
//     Accessories: categoryNames1(47,53),
//     Paints: categoryNames1(53,59),
//   };
// };
//
// export const getModifiedRequestParams = (requestParams: Record<string, any>): { params: Record<string, any>, foundCategoryId?: number, foundProductTypeId?: number } => {
//   const pathname = usePathname();
//
//   const pathSegments = pathname.split("/").filter(Boolean);
//   let modifiedParams = { ...requestParams };
//
//   const categories = Object.keys(getCategories());
//   const categoryIndex = categories.indexOf(pathSegments[1]);
//
//   let foundProductTypeId: number | undefined = undefined;
//
//   if (pathSegments.length >= 2 && categoryIndex !== -1) {
//     modifiedParams.ProductTypes = categoryIndex + 1;
//     foundProductTypeId = categoryIndex + 1; // <-- сохраняем отдельно
//   }
//
//   const categoryNames: { name: string, id: number }[] = getCategories()[categories[categoryIndex] as keyof ICategoryNames] || [];
//   let foundCategoryId: number | undefined = undefined;
//
//   if (pathSegments.length >= 3) {
//     const subcategory = pathSegments[2];
//     const foundCategory = categoryNames.find(category => category.name === subcategory);
//
//     if (foundCategory) {
//       modifiedParams.Categories = foundCategory.id;
//       foundCategoryId = foundCategory.id;
//     }
//   }
//
//   return { params: modifiedParams, foundCategoryId, foundProductTypeId };
// };


'use client'

import { useStore } from "@/hooks/useStore";
import { usePathname } from "next/navigation";

type ICategoryNames = {
  Lights: { name: string; id: number; }[];
  // Furniture: { name: string; id: number; }[];
  // Mirrors: { name: string; id: number; }[];
  Carpets: { name: string; id: number; }[];
  TovariDlyaDoma: { name: string; id: number; }[];
  Accessories: { name: string; id: number; }[];
  Paints: { name: string; id: number; }[];
};

export const transliterate = (text: string) => {
  const map: { [key: string]: string } = {
    "а": "a", "б": "b", "в": "v", "г": "g", "д": "d", "е": "e", "ё": "yo",
    "ж": "zh", "з": "z", "и": "i", "й": "y", "к": "k", "л": "l", "м": "m",
    "н": "n", "о": "o", "п": "p", "р": "r", "с": "s", "т": "t", "у": "u",
    "ф": "f", "х": "kh", "ц": "ts", "ч": "ch", "ш": "sh", "щ": "sch", "ъ": " ",
    "ы": "y", "ь": " ", "э": "e", "ю": "yu", "я": "ya"
  };

  return text.split("")
    .map(char => map[char.toLowerCase()] || char)
    .join("")
    .replace(/\s+/g, '');
};

// Теперь это хук
export const useGetCategories = (): ICategoryNames => {
  const store = useStore();
  const productStore = store.product;
  const filterCategories = productStore.categoriesFil;

  const categoryNames = (start: number, end: number) => {
    return filterCategories
      .slice(start, end)
      .map(category => transliterate(category.name));
  };

  const categoryNames1 = (start: number, end: number) => {
    return filterCategories
      .slice(start, end)
      .map((category) => ({
        name: transliterate(category.name),
        id: category.id
      }));
  };

  return {
    // Lights: categoryNames1(0, 9),
    Lights: categoryNames1(0, 5),
    // Furniture: categoryNames1(10, 19),
    // Mirrors: categoryNames1(19, 29),
    Carpets: categoryNames1(29, 35),
    TovariDlyaDoma: categoryNames1(35, 47),
    Accessories: categoryNames1(47, 53),
    Paints: categoryNames1(53, 59),
  };
};

// Теперь это хук
export const useModifiedRequestParams = (requestParams: Record<string, any>) => {
  const pathname = usePathname();
  const categories = Object.keys(useGetCategories());

  const pathSegments = pathname.split("/").filter(Boolean);
  let modifiedParams = { ...requestParams };

  const categoryIndex = categories.indexOf(pathSegments[1]);
  let foundProductTypeId: number | undefined = undefined;

  if (pathSegments.length >= 2 && categoryIndex !== -1) {
    modifiedParams.ProductTypes = categoryIndex + 1;
    foundProductTypeId = categoryIndex + 1;
  }

  const categoryNames: { name: string, id: number }[] = useGetCategories()[categories[categoryIndex] as keyof ICategoryNames] || [];
  let foundCategoryId: number | undefined = undefined;

  if (pathSegments.length >= 3) {
    const subcategory = pathSegments[2];
    const foundCategory = categoryNames.find(category => category.name === subcategory);

    if (foundCategory) {
      modifiedParams.Categories = foundCategory.id;
      foundCategoryId = foundCategory.id;
    }
  }

  return { params: modifiedParams, foundCategoryId, foundProductTypeId };
};
