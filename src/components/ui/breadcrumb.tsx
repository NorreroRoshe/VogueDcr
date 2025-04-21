'use client'
import React from 'react';
import ActiveLink from '@/components/ui/active-link';
import useBreadcrumb, { convertBreadcrumbTitle } from '@/utils/use-breadcrumb';
import { useTranslation } from 'next-i18next';
import { IoChevronForward } from 'react-icons/io5';
import { IoHomeOutline } from 'react-icons/io5';
import { ROUTES } from '@/utils/routes';
import cls from './Ui.module.scss';
import { usePathname, useSearchParams } from "next/navigation";
import {useStore} from "@/hooks/useStore";
import {transliterate} from "@/hooks/useGetCategories";
import {observer} from "mobx-react";

interface Props {
  children: any;
}

const BreadcrumbItem: React.FC<Props> = ({ children, ...props }) => {
  return (
    <li
      className="text-sm text-skin-muted px-2.5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-skin-base"
      {...props}>
      {children}
    </li>
  );
};

const BreadcrumbSeparator: React.FC<Props> = ({ children, ...props }) => {
  return (
    <li className="text-base text-skin-base mt-[1px]" {...props}>
      {/*{children}*/}/
      {/*/*/}
    </li>
  );
};

export const BreadcrumbItems = (props: any) => {
  let children: any = React.Children.toArray(props.children);

  children = children.map((child: string, index: number) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ));

  const lastIndex = children.length - 1;

  children = children.reduce((acc: any, child: string, index: number) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>{props.separator}</BreadcrumbSeparator>,
      );
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <div className="flex items-center">
      <ol className="flex items-center w-full dfgbv">{children}</ol>
      {/*overflow-hidden / это для ол*/}
    </div>
  );
};

const Breadcrumb: React.FC<{ separator?: string }> =  observer(({
                                                                  separator = <IoChevronForward className="text-skin-base text-opacity-40 text-15px" />,
                                                                }) => {

  const store = useStore();
  const productStore = store.product;
  const brandStore = store.brand;

  const breadcrumbs = useBreadcrumb();
  const { t } = useTranslation('common');
  const searchParams = useSearchParams();
  const filterСategories = productStore.categoriesFil;



  const categoryNames1 = (start: number, end: number) => {
    return filterСategories
      .slice(start, end)
      .map((category, index) => ({
        name: transliterate(category.name),
        id: category.id
      }));
  };

  const categoryNames = (start: number, end: number) => {
    return filterСategories
      .slice(start, end)
      .map((category, index) => ({
        name: category.name,
        id: category.id
      }));
  };

  const getBreadcrumbLabel = (breadcrumb: string) => {
    const decodedBreadcrumb = decodeURIComponent(breadcrumb);

    switch (decodedBreadcrumb) {
      case 'Brands':
        return 'Бренды';
      case 'Product':
        return 'Все товары';
      case 'Chapter':
        return 'Все товары';
      case 'Lights':
        return 'Свет';
      case 'Furniture':
        return 'Мебель';
      case 'Mirrors':
        return 'Зеркала';
      case 'Carpets':
        return 'Ковры';
      case 'TovariDlyaDoma':
        return 'Товары для дома';
      case 'Accessories':
        return 'Аксессуары';
      case 'Paints':
        return 'Картины';
      case 'Factory':
        return 'Производство';
      case 'Contacts':
        return 'Контакты';
      case 'Cart':
        return 'Корзина';
      case 'Privacy':
        return 'Политика';
      case 'Favourites':
        return 'Избранные';
      case 'Oferta':
        return 'Оферта';
      case 'Soglasie':
        return 'Согласие на обработку';
      case 'DostavkaOplata':
        return 'Доставка и оплата';
      case 'SearchPage':
        return 'Поиск';
      case 'Soglashenie':
        return 'Соглашение';
      case 'AboutUs':
        return 'О компании';

      default:
        return convertBreadcrumbTitle(decodedBreadcrumb);
    }
  };

  // const updateBreadcrumbs = (breadcrumbs: { breadcrumb: string, href: string }[]) => {
  //   if (!Array.isArray(breadcrumbs)) {
  //     return [];
  //   }
  //   const categoryNames1Data = categoryNames1(0, 100);
  //
  //   const categoryNamesData = categoryNames(0, 100);
  //
  //   return breadcrumbs.map(breadcrumb => {
  //     const category = categoryNames1Data.find(category => category.name === transliterate(breadcrumb.breadcrumb));
  //
  //     if (category) {
  //       const categoryInNames = categoryNamesData.find(c => c.id === category.id);
  //       if (categoryInNames) {
  //         return {
  //           ...breadcrumb,
  //           breadcrumb: categoryInNames.name
  //         };
  //       }
  //     }
  //
  //     // Если не нашли, возвращаем оригинальный breadcrumb
  //     return breadcrumb;
  //   });
  // };

  const updateBreadcrumbs = (breadcrumbs: { breadcrumb: string, href: string }[]) => {
    if (!Array.isArray(breadcrumbs)) {
      return [];
    }

    const categoryNames1Data = categoryNames1(0, 100);
    const categoryNamesData = categoryNames(0, 100);

    return breadcrumbs.map((breadcrumb, index, array) => {
      const category = categoryNames1Data.find(category => category.name === transliterate(breadcrumb.breadcrumb));

      if (category) {
        const categoryInNames = categoryNamesData.find(c => c.id === category.id);
        if (categoryInNames) {
          return {
            ...breadcrumb,
            breadcrumb: categoryInNames.name
          };
        }
      }

      // Проверяем, если путь относится к брендам
      const pathSegments = breadcrumb.href.split('/').filter(Boolean); // Разделяем URL и убираем пустые элементы

      if (pathSegments[0] === 'Brands') {
        let newBreadcrumb = breadcrumb.breadcrumb;

        if (pathSegments.length > 1) {
          newBreadcrumb = brandStore.brandName || productStore.brandName || pathSegments[1]; // Подставляем brandName вместо первой части после "Brands"
        }
        if (pathSegments.length > 2) {
          newBreadcrumb = productStore.collectionName || pathSegments[2]; // Подставляем collectionName вместо второй части после "Brands"
        }

        return {
          ...breadcrumb,
          breadcrumb: newBreadcrumb
        };
      }

      if (pathSegments[0] === 'Product') {
        let newBreadcrumbProd = breadcrumb.breadcrumb;

        if (pathSegments.length > 1) {
          newBreadcrumbProd = productStore.detItem.article || pathSegments[1]; // Подставляем brandName вместо первой части после "Brands"
        }

        return {
          ...breadcrumb,
          breadcrumb: newBreadcrumbProd
        };
      }

      return breadcrumb;
    });
  };



  const updatedBreadcrumbs = updateBreadcrumbs(breadcrumbs);

  return (
    <div className={cls.ewgrwerfefwd}>
      <BreadcrumbItems separator={separator}>

        <ActiveLink href={ROUTES.HOME} activeClassName="font-semibold text-heading">
          <span className={`inline-flex items-center ${cls.sadaasveqw} ${cls.ewgrefwd}`}>
            {/*<IoHomeOutline className={`me-1.5 text-skin-base text-15px`} />*/}
            {t('Vogue-Decor.ru')}
          </span>
        </ActiveLink>
        {/*{updatedBreadcrumbs?.map((breadcrumb: any) => (*/}
        {/*  <ActiveLink*/}
        {/*    href={breadcrumb.href}*/}
        {/*    activeClassName="font-semibold text-heading"*/}
        {/*    key={breadcrumb.href}>*/}
        {/*      <span className={cls.ewgrefwd}>*/}
        {/*        {getBreadcrumbLabel(breadcrumb.breadcrumb)}*/}
        {/*      </span>*/}
        {/*  </ActiveLink>*/}
        {/*))}*/}

        {updatedBreadcrumbs?.map((breadcrumb: any) => {
          const label = getBreadcrumbLabel(breadcrumb.breadcrumb);
          const href = breadcrumb.breadcrumb === 'Product' ? '/Chapter' : breadcrumb.href;

          return (
            <ActiveLink
              href={href}
              activeClassName="font-semibold text-heading"
              key={breadcrumb.href}>
        <span className={cls.ewgrefwd}>
          {label}
        </span>
            </ActiveLink>
          );
        })}

      </BreadcrumbItems>
    </div>
  );
});

export default Breadcrumb;
