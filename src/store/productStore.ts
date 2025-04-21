"use client"
import ProductService from '@/api/Product/ProductService';
import { IFilter } from '@/types/Product/filter.types';
import {
  ICategoryType,
  IColorType,
  IFiltersRes,
  IGetProductDetReq,
  IGetProductsReq,
  IType
} from '@/types/Product/product.dtos';
import { Product } from '@/types/Product/product.types';
import { IProductStore } from '@/types/Stores/IProductStore';
import { makeAutoObservable } from 'mobx';

export class ProductStore implements IProductStore {
  items: Product[] = [];
  detItem: Product = {} as Product;
  collectionItems: Product[] = [];
  defSearchItems: Product[] = [];
  buttBrandProduct: Product[] = [];
  foppaBrandProduct: Product[] = [];
  newItems: Product[] = [];
  collectionName: string = '';
  brandName: string = '';
  brandItems: Product[] = [];
  cartCount: number = 0;
  favouritesCount: number = 0;
  totalCount: number = 0;
  searchedString: string = "";
  searchProduct: Product[] = [];
  searchPageProduct: Product[] = [];
  searchPageTotalCount: number = 0;
  carpetMatFil: IType[] = [];
  material_obrFil: IType[] = [];
  materialsFil: IType[] = [];
  materials_accessoriesFil: IType[] = [];
  materials_borderFil: IType[] = [];
  materials_homeFil: IType[] = [];
  materials_hostFil: IType[] = [];
  stylesFil: IType[] = [];
  styles_carpetFil: IType[] = [];
  typesChandFil: IType[] = [];
  colorsFil: IColorType[] = [];
  categoriesFil: ICategoryType[] = [];
  prodTypFil: ICategoryType[] = [];
  allFilters: IFiltersRes = {
    categories: [],
    colors: [],
    types: [],
    productTypes: []
  };
  filters: IFilter = {
    ProductTypes: []
  };
  sort: number = 0;
  isLoading: boolean = false;


  constructor() {
    makeAutoObservable(this);
  }

  setProductTypes(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.ProductTypes) ? this.filters.ProductTypes : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.ProductTypes =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };
  setArrayProductTypes(newProductTypes: number[]) {
    this.filters.ProductTypes = newProductTypes;
  };

  setCategories(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.Categories) ? this.filters.Categories : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.Categories =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };
  setArrayCategories(newCategories: number[]) {
    this.filters.Categories = newCategories;
  };

  setfilter6(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter6) ? this.filters.filter6 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter6 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };

  setArrayfilter6(newfilter6: number[]) {
    this.filters.filter6 = newfilter6;
  };


  setfilter8(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter8) ? this.filters.filter8 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter8 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };

  setArrayfilter8(newfilter8: number[]) {
    this.filters.filter8 = newfilter8;
  };

  setfilter10(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter10) ? this.filters.filter10 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter10 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };

  setArrayfilter10(newfilter10: number[]) {
    this.filters.filter10 = newfilter10;
  };

  setfilter9(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter9) ? this.filters.filter9 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter9 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };

  setArrayfilter9(newfilter9: number[]) {
    this.filters.filter9 = newfilter9;
  };

  setfilter11(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter11) ? this.filters.filter11 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter11 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };

  setArrayfilter11(newfilter11: number[]) {
    this.filters.filter11 = newfilter11;
  };

  setfilter12(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter12) ? this.filters.filter12 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter12 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };


  setArrayfilter12(newfilter12: number[]) {
    this.filters.filter12 = newfilter12;
  };

  setfilter13(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter13) ? this.filters.filter13 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter13 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };

  setArrayfilter13(newfilter13: number[]) {
    this.filters.filter13 = newfilter13;
  };

  setAdditionalParams(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.AdditionalParams) ? this.filters.AdditionalParams : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.AdditionalParams =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };
  setArrayAdditionalParams(newAdditionalParams: number[]) {
    this.filters.AdditionalParams = newAdditionalParams;
  };



  setfilter2(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter2) ? this.filters.filter2 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter2 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };
  setArrayfilter2(newfilter2: number[]) {
    this.filters.filter2 = newfilter2;
  };


  setfilter5(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter5) ? this.filters.filter5 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter5 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };
  setArrayfilter5(newfilter5: number[]) {
    this.filters.filter5 = newfilter5;
  };

  setfilter7(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter7) ? this.filters.filter7 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter7 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };
  setArrayfilter7(newfilter7: number[]) {
    this.filters.filter7 = newfilter7;
  };

  setfilter3(dataValue: number) {
    const value = dataValue + 1;
    const array = Array.isArray(this.filters.filter3) ? this.filters.filter3 : [];
    const ind = array.findIndex((type) => type === value);
    this.filters.filter3 =
      ind === -1 //Здесь мы сравниваем , есть ли он или нет
        ? [...array, value] //Здесь мы добавляем
        : [...array?.slice(0, ind), ...array?.slice(ind + 1, array.length)]; //Здесь мы удаляем
  };
  setArrayfilter3(newfilter3: number[]) {
    this.filters.filter3 = newfilter3;
  };

  setCount(countProduct: number){
    this.filters.Count = countProduct;
  }

  setFrom(fromProduct: number) {
    this.filters.From = fromProduct;
  };
  setPage(pageProduct: number) {
    this.filters.Page = pageProduct;
  };
  setSearchName(searchName: string) {
    this.filters.SearchQuery = searchName;
  };
  setIsSale(isSale: boolean) {
    this.filters.IsSale = isSale;
  };
  setSort(sortProduct: number) {
    this.sort = sortProduct;
  };

  setPrice(minPrice: number, maxPrice: number ) {
    this.filters.MinPrice = minPrice;
    this.filters.MaxPrice = maxPrice;
  };

  setDiameter(minDiameter: number, maxDiameter: number ) {
    this.filters.MinDiameter = minDiameter;
    this.filters.MaxDiameter = maxDiameter;
  };

  setHeight(minHeight: number, maxHeight: number ) {
    this.filters.MinHeight = minHeight;
    this.filters.MaxHeight = maxHeight;
  };
  setLength(minLength: number, maxLength: number ) {
    this.filters.MinLength = minLength;
    this.filters.MaxLength = maxLength;
  };
  setWidth(minWidth: number, maxWidth: number ) {
    this.filters.MinWidth = minWidth;
    this.filters.MaxWidth = maxWidth;
  };
  setIndent(minIndent: number, maxIndent: number ) {
    this.filters.MinIndent = minIndent;
    this.filters.MaxIndent = maxIndent;
  };
  setLampCount(minLampCount: number, maxLampCount: number ) {
    this.filters.MinLampCount = minLampCount;
    this.filters.MaxLampCount = maxLampCount;
  };

  clearFilters() {
    this.filters = {};
    this.filters.MaxPrice = 2000000;
    this.filters.MinPrice = 0;

    this.filters.MaxWidth = 1500;
    this.filters.MinWidth = 0;

    this.filters.MaxHeight = 2000;
    this.filters.MinHeight = 0;

    this.filters.MaxLength = 2000;
    this.filters.MinLength = 0;

    this.filters.MaxIndent = 1500;
    this.filters.MinIndent = 0;

    this.filters.MaxLampCount = 100;
    this.filters.MinLampCount = 0;

    this.filters.MinDiameter = 0;
    this.filters.MaxDiameter = 2000;
  };

  async getProducts(Count: number, From?: number, data?: IGetProductsReq) {
    this.isLoading = true;
    const response = await ProductService.getProducts({ Count, From,  data });

    if ('data' in response) {
      this.isLoading = false;
      this.cartCount = response.data.cartCount;
      this.items = response.data.products;
      this.favouritesCount = response.data.favouritesCount;
      this.totalCount = response.data.totalCount;
    }
    return response;
  };

  async getSearchProducts(
    data: IFilter) {
    this.isLoading = true;
    const response = await ProductService.getSearchProducts({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.cartCount = response.data.cartCount;
      this.favouritesCount = response.data.favouritesCount;
      this.totalCount = response.data.totalCount;

      if (data.Count === 3) {
        this.searchProduct = response.data.products.slice(0, 3);
      } else {
        this.searchPageProduct = response.data.products;
        this.searchPageTotalCount = response.data.totalCount;
        this.searchedString = data.SearchQuery || "";
      }
    }
    return response;
  };


  async getDefaultSearchProducts(data: IFilter) {
    this.isLoading = true;
    const response = await ProductService.getDefaultSearchProducts({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.defSearchItems = response.data.products;
    }
  };
  async getButtBrandProducts(data: IFilter) {
    this.isLoading = true;
    const response = await ProductService.getButtBrandProducts({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.buttBrandProduct = response.data.products;
    }
  };
  async getFoppaBrandProducts(data: IFilter) {
    this.isLoading = true;
    const response = await ProductService.getFoppaBrandProducts({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.foppaBrandProduct = response.data.products;
    }
  };

  async getNewProducts(data: IFilter) {
    this.isLoading = true;
    const response = await ProductService.getNewProducts({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.newItems = response.data.products;
    }
  };

  async getCollectionProducts(data: IFilter) {
    this.isLoading = true;
    const response = await ProductService.getCollectionProducts({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.cartCount = response.data.cartCount;
      this.collectionItems = response.data.products;
      this.collectionName = response.data.collectionName;
      this.brandName = response.data.brandName;
      this.favouritesCount = response.data.favouritesCount;
      this.totalCount = response.data.totalCount;
    }
  };

  async getBrandProducts(data: IFilter) {
    this.isLoading = true;
    const response = await ProductService.getBrandProducts({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.cartCount = response.data.cartCount;
      this.brandItems = response.data.products;
      this.favouritesCount = response.data.favouritesCount;
      this.totalCount = response.data.totalCount;
    }
  };


  async getDetProduct(data: IGetProductDetReq) {
    this.isLoading = true;
    const response = await ProductService.getDetProduct({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.detItem = response.data
    }

    return response;
  };

  async createProduct(data: Product) {
    this.isLoading = true;
    const response = await ProductService.createProduct({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.items = [...this.items, response.data];
      this.totalCount = this.totalCount + 1;
    }
  };


  async getAllFilters(data: void) {
    this.isLoading = true;
    const response = await ProductService.getAllFilters({ data });

    if ('data' in response) {
      this.isLoading = false;
      this.allFilters = response.data.filters;
      this.categoriesFil = response.data.filters.categories;
      this.colorsFil = response.data.filters.colors;
      this.prodTypFil = response.data.filters.productTypes;
      this.carpetMatFil = response.data.filters.materials_carpet;
      this.material_obrFil = response.data.filters.material_obr;
      this.materialsFil = response.data.filters.materials;
      this.materials_accessoriesFil = response.data.filters.materials_accessories;
      this.materials_borderFil = response.data.filters.materials_border;
      this.materials_homeFil = response.data.filters.materials_home;
      this.materials_hostFil = response.data.filters.materials_host;
      this.stylesFil = response.data.filters.styles;
      this.styles_carpetFil = response.data.filters.styles_carpet;
      this.typesChandFil = response.data.filters.types;
      this.allFilters.productTypes = response.data.filters.productTypes;
    }

    return response;
  };
}