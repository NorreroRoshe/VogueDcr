"use client"
import { APIError } from "@/api/makeRequest";
import { IFilter } from "../Product/filter.types";
import {
  ICategoryType,
  IType,
  IColorType,
  IFiltersRes,
  IGetAllFiltersRes,
  IGetProductDetReq,
  IGetProductsReq,
  IGetProductsRes
} from "../Product/product.dtos";
import { Product } from "../Product/product.types";
import { AxiosResponse } from "axios";

export interface IProductStore {
  items: Product[];
  detItem: Product;
  collectionItems: Product[];
  defSearchItems: Product[];
  newItems: Product[];
  collectionName: string;
  brandName: string;
  brandItems: Product[];
  cartCount: number;
  favouritesCount: number;
  totalCount: number;
  prodTypFil: ICategoryType[];
  categoriesFil: ICategoryType[];
  material_obrFil: IType[];
  materialsFil: IType[];
  materials_accessoriesFil: IType[];
  materials_borderFil: IType[];
  materials_homeFil: IType[];
  materials_hostFil: IType[];
  stylesFil: IType[];
  styles_carpetFil: IType[];
  typesChandFil: IType[];
  carpetMatFil: IType[];
  colorsFil: IColorType[];
  allFilters: IFiltersRes;
  filters: IFilter;
  searchProduct: Product[];
  buttBrandProduct: Product[];
  foppaBrandProduct: Product[];
  searchPageProduct: Product[];
  searchPageTotalCount: number;
  searchedString: string;
  sort: number;
  isLoading: boolean;

  setProductTypes: (dataValue: number) => void;
  setArrayProductTypes: (newProductTypes: number[]) => void;
  setCategories: (dataValue: number) => void;
  setArrayCategories: (newCategories: number[]) => void;
  setfilter6: (dataValue: number) => void;
  setfilter8: (dataValue: number) => void;
  setfilter10: (dataValue: number) => void;
  setfilter9: (dataValue: number) => void;
  setfilter11: (dataValue: number) => void;
  setfilter12: (dataValue: number) => void;
  setfilter13: (dataValue: number) => void;
  setArrayfilter6: (newfilter6: number[]) => void;
  setAdditionalParams: (dataValue: number) => void;
  setArrayAdditionalParams: (newAdditionalParams: number[]) => void;
  setfilter2: (dataValue: number) => void;
  setArrayfilter2: (newfilter2: number[]) => void;
  setfilter5: (dataValue: number) => void;
  setArrayfilter5: (newfilter5: number[]) => void;
  setfilter7: (dataValue: number) => void;
  setArrayfilter7: (newfilter7: number[]) => void;
  setArrayfilter8: (newfilter8: number[]) => void;
  setArrayfilter9: (newfilter9: number[]) => void;
  setArrayfilter10: (newfilter10: number[]) => void;
  setArrayfilter11: (newfilter11: number[]) => void;
  setArrayfilter12: (newfilter12: number[]) => void;
  setArrayfilter13: (newfilter13: number[]) => void;
  setfilter3: (dataValue: number) => void;
  setArrayfilter3: (newfilter3: number[]) => void;

  setCount: (countProduct: number) => void;
  setFrom: (fromProduct: number) => void;
  setPage: (pageProduct: number) => void;
  setSearchName: (searchName: string) => void;
  setIsSale: (isSale: boolean) => void;
  setSort: (sortProduct: number) => void;


  setPrice: (minPrice: number, maxPrice: number) => void;
  setDiameter: (minDiameter: number, maxDiameter: number) => void;
  setHeight: (minHeight: number, maxHeight: number) => void;
  setLength: (minLength: number, maxLength: number) => void;
  setWidth: (minWidth: number, maxWidth: number) => void;
  setIndent: (minIndent: number, maxIndent: number) => void;
  setLampCount: (minLampCount: number, maxLampCount: number) => void;
  clearFilters: () => void;
  getProducts: (Count: number, From?: number, data?: IGetProductsReq) => Promise<APIError | AxiosResponse<IGetProductsRes, any>>;
  getSearchProducts: (data: IFilter) => Promise<APIError | AxiosResponse<IGetProductsRes, any>>;
  getDefaultSearchProducts: (data: IFilter) => void;
  getButtBrandProducts: (data: IFilter) => void;
  getFoppaBrandProducts: (data: IFilter) => void;
  getNewProducts: (data: IFilter) => void;
  getCollectionProducts: (data: IFilter) => void;
  getBrandProducts: (data: IFilter) => void;
  getDetProduct: (data: IGetProductDetReq) => Promise<APIError | AxiosResponse<Product, any>>;
  getAllFilters: (data: void) => Promise<APIError | AxiosResponse<IGetAllFiltersRes, any>>;

  // createProduct: (data: Product) => void;
}