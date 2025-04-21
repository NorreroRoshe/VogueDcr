"use client"
export interface IFilter {
  Colors?: number[];
  ProductTypes?: number[];
  Categories?: number[];
  Styles?: number[];
  MinPrice?: number;
  MaxPrice?: number;
  MinLength?: number;
  MaxLength?: number;
  MinDiameter?: number;
  MaxDiameter?: number;
  MinHeight?: number;
  MaxHeight?: number;
  MinWidth?: number;
  MaxWidth?: number;
  MinIndent?: number;
  MaxIndent?: number;
  MinLampCount?: number;
  MaxLampCount?: number;
  AdditionalParams?: number[];
  Materials?: number[];
  PictureMaterial?: number[];
  From?: number;
  Page?: number;
  Count?: number;
  ChandelierTypes?: number[];
  SearchQuery?: string;
  CollectionsId?: string;
  BrandsId?: string;
  IsSale?: boolean;
  filter2?: number[];      //Colors
  filter3?: number[];      //ChandelierTypes
  filter5?: number[];      //Materials
  filter6?: number[];      //Styles
  filter7?: number[];      //PictureMaterial
  filter8?: number[];      //Stil kovrov
  filter9?: number[];      //Материал ковров
  filter10?: number[];      //Материал для товаров и услуг
  filter11?: number[];      //Материал аксессуаров
  filter12?: number[];      //Материал рамки
  filter13?: number[];      //Материал холста
}