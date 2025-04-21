"use client"
import { IFilter } from "./filter.types";
import { Product } from "./product.types";

export interface IGetProductsRes {
  cartCount: number;
  favouritesCount: number;
  products: Product[];
  totalCount: number;
}

export interface IGetProductsCollRes {
  cartCount: number;
  favouritesCount: number;
  collectionName: string;
  brandName: string;
  products: Product[];
  totalCount: number;
}

export interface IGetProductsReq extends IFilter {
  SortType?: number;
}

export interface IGetProductDetReq {
  ProductId: string;
}





export interface IGetAllFiltersRes {
  filters: IFiltersRes;
}

export interface IFiltersRes {
  categories: IType[];
  colors: IColorType[];
  types: IType[];
  productTypes: IType[];
  materials?: IType[];
  styles?: IType[];
  material_obr?: IType[];
  styles_carpet?: IType[];
  materials_carpet?: IType[];
  materials_home?: IType[];
  materials_accessories?: IType[];
  materials_border?: IType[];
  materials_host?: IType[];
}

export interface ICategoryType {
  id: number;
  name: string;
  EngName?: string;
  pic?: string;
  hex?: string;
  created_at?: string;
  updated_at?: string;
  filter1?: Record<number, boolean>;
  filter4?: Record<number, boolean>;
}

export interface IColorType {
  id: number;
  name: string;
  hex: string;
  pic: string;
  filter1: Record<number, boolean>;
  filter4: Record<number, boolean>;
  created_at: string;
  updated_at: string;
}

export interface IType {
  name: string;
  id: number;
  filter1: Record<number, boolean>;
}