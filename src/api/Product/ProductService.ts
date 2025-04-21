"use client"
import makeRequest from '@/api/makeRequest';
// import {ProductsResponse} from "@/types/types";
import {AxiosResponse} from "axios";
import { COUNT_PER_PAGE } from "@/components/Pagination/pagination-lib";
import {
  IGetProductDetReq,
  IGetProductsReq,
  IGetProductsRes,
  IGetProductsCollRes,
  IGetAllFiltersRes
} from '@/types/Product/product.dtos';
import { IFilter } from '@/types/Product/filter.types';
import { Product } from '@/types/Product/product.types';

export const arrayToString = (param: [string, unknown[]]): string => {
  return param[1].map((num) => `${param[0]}=${num}`).join("&");
};

export const isEntryArray = (val: [string, any]): val is [string, unknown[]] => {
  return Array.isArray(val[1]);
};

class ProductService {

  // getProducts({Count, From, data} :
  //   {Count: number, From?: number, data?: IGetProductsReq}) {
  //   return makeRequest<IGetProductsRes>({
  //     url: `/product?From=${From}&${data && Object.entries(data)
  //       .map((item) =>
  //         (item[0] === "ProductTypes" ||
  //           item[0] === "Categories" ||
  //           item[0] === "Styles" ||
  //           item[0] === "ChandelierTypes" ||
  //           item[0] === "Colors" ||
  //           item[0] === "AdditionalParams" ||
  //           item[0] === "Materials" ||
  //           item[0] === "PictureMaterial") &&
  //           isEntryArray(item)
  //           ? arrayToString(item)
  //           : `${item[0]}=${item[1]}`
  //       )
  //       .concat(`Count=${Count || COUNT_PER_PAGE}`)
  //       .join("&")}`,
  //     method: 'get',
  //   });
  // };
  getProducts({ Count, From, data }: { Count: number; From?: number; data?: IGetProductsReq }) {
    const queryParams: string[] = [];

    if (From !== undefined) queryParams.push(`From=${From}`);
    if (Count !== undefined) queryParams.push(`Count=${Count}`);

    if (data) {
      Object.entries(data).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          queryParams.push(`${key}=${value.join(",")}`); // Объединяем массив через запятую
        } else {
          queryParams.push(`${key}=${value}`);
        }
      });
    }

    return makeRequest<IGetProductsRes>({
      url: `/product?${queryParams.join("&")}`, // Собираем строку параметров вручную
      method: "GET",
    });
  }
  getSearchProducts({data} :
    {data: IFilter}) {
    return makeRequest<IGetProductsRes>({
      url: "/product/search",
      method: "GET",
      params: {
        SearchQuery: data.SearchQuery,
        From: data.From,
        Count: data.Count,
      }
    });
  };

  getCollectionProducts({data} :
    {data: IFilter}) {
    return makeRequest<IGetProductsCollRes>({
      url: "/product",
      method: "GET",
      params: {
        From: data.From,
        Count: data.Count,
        CollectionsId: data.CollectionsId,
        SortType: 1,
      },
    });
  }

  getBrandProducts({data} :
                        {data: IFilter}) {
    return makeRequest<IGetProductsCollRes>({
      url: "/product",
      method: "GET",
      params: {
        From: data.From,
        Count: data.Count,
        BrandsId: data.BrandsId,
        SortType: 1,
      },
    });
  }

  // getBrandProducts({data} :
  //   {data: IFilter}) {
  //   return makeRequest<IGetProductsRes>({
  //     url: `/product`,
  //     method: "GET",
  //     data: {
  //       From: data.From,
  //       Count: data.Count,
  //       BrandsId: data.BrandsId,
  //     },
  //   });
  // };

  getDefaultSearchProducts({data} :
                        {data: IFilter}) {
    return makeRequest<IGetProductsCollRes>({
      url: "/product",
      method: "GET",
      params: {
        From: data.From,
        Count: data.Count,
        Categories: 60,
      },
    });
  };
  getButtBrandProducts({data} :
                           {data: IFilter}) {
    return makeRequest<IGetProductsCollRes>({
      url: "/product",
      method: "GET",
      params: {
        From: data.From,
        Count: data.Count,
        Categories: 61,
      },
    });
  };
  getFoppaBrandProducts({data} :
                           {data: IFilter}) {
    return makeRequest<IGetProductsCollRes>({
      url: "/product",
      method: "GET",
      params: {
        From: data.From,
        Count: data.Count,
        Categories: 62,
      },
    });
  };


  getNewProducts({data} :
                           {data: IFilter}) {
    return makeRequest<IGetProductsCollRes>({
      url: "/product",
      method: "GET",
      params: {
        From: data.From,
        Count: data.Count,
        SortType: 5,
        Categories: 63,
      },
    });
  };



  getDetProduct({data} :
    {data: IGetProductDetReq}) {
    return makeRequest<Product>({
      url: `/product/details`,
      method: "GET",
      params: data,
    });
  };
  createProduct({data} :
    {data: Product}) {
    return makeRequest<Product>({
      url: "/product",
      method: "POST",
      data: data,
    });
  };
  getAllFilters({data} :
     {data: void}) {
    return makeRequest<IGetAllFiltersRes>({
      url: `/filter`,
      method: "GET",
      data: data,
    });
  };
}

export default new ProductService();
