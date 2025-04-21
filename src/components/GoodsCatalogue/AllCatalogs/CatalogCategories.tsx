'use client'
import React, { useState, useEffect } from 'react';
import cls from '../GoodsCatalogue.module.scss';
import SectionHeader from '../../common/section-header';
import { ISubcategory, ISiteCategory } from '@/settings/site-path-cathegory';
import Container from '@/components/ui/container';
import BundleGridCategory from '@/components/bundle/bundle-grid-category';
import Image from 'next/image';
import Link from 'next/link';
import {ICategoryType} from "@/types/Product/product.dtos";
import {usePathname} from "next/navigation";

export interface ICatalogCategories {
  sitePathCategory?: ICategoryType[];
  shouldDisplay?: boolean;
  ProductTypesArray?: number[];
}

export const CatalogCategories: React.FC<ICatalogCategories> = ({ sitePathCategory, shouldDisplay, ProductTypesArray }) => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean); // Разбиваем путь на части

  const [isWideScreen, setIsWideScreen] = useState(false);
  useEffect(() => {
    setIsWideScreen(window.innerWidth >= 1150)
  }, [])

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth >= 1150);
    };

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Detach the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const getProductTypeName = (pathSegments: string[]) => {
      if (pathSegments.length === 1) return 'Все товары';
      if (pathSegments.length === 2) {
        switch (pathSegments[1]) {
          case "Lights":
            return "Свет";
          case "Furniture":
            return "Мебель";
          case "Mirrors":
            return "Зеркала";
          case "Carpets":
            return "Ковры";
          case "TovariDlyaDoma":
            return "Товары для дома";
          case "Accessories":
            return "Аксессуары";
          case "Paints":
            return "Картины";
          default:
            return "Неизвестный тип товара";
        }
      }
      return "Все товары";
    };
  const productTypeName = getProductTypeName(pathSegments);
  if (isWideScreen) {
    return (
      <>
        <SectionHeader
          sectionHeading={`Категория: ${productTypeName}`}
          sectionSubHeading=""
          headingPosition="left"
        />
        <div className={cls.catalogDepartmentCategories}>

          {sitePathCategory?.map((subcategory: ICategoryType, index: number) => (
            <div key={subcategory.id} className={cls.catalogCategoryCell}>
              <Link href={shouldDisplay ? `${pathSegments[1]}/${subcategory?.EngName}` : `${pathSegments[0]}/${subcategory?.EngName}`} className={cls.catalogCategoryCellLink}>
                <div className={cls.catalogCategory}>
                  <div className={cls.catalogCategoryImageContainer}>
                    <Image
                      width={200}
                      height={200}
                      src={process.env.NEXT_PUBLIC_PHOTO_URL + 'storage/' + subcategory.pic}
                      alt={subcategory.name}
                      draggable="false"
                      loading="lazy"
                      className={`${cls.lazyImg} ${cls.catalogCategoryImage}`}
                      layout="intrinsic" // Подстраивает размер под оригинал
                      priority={false} // Загружает лениво
                      quality={60} // Сжимает изображение
                    />
                  </div>
                  <div className={cls.catalogCategoryTitleWrapper}>
                    <h3 className={cls.catalogCategoryTitle}>{subcategory.name}</h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </>
    )
  } else {
    return (
      <Container>
        <BundleGridCategory
          className="mb-12 lg:mb-14 xl:mb-16 2xl:mb-20"
          data={sitePathCategory} // You should replace this with your actual data for BundleGrid
          productTypeName={productTypeName}
          shouldDisplay={shouldDisplay}
        />
      </Container>
    );
  }
}