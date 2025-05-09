'use client'
import React, { useState, useEffect } from 'react';
import { Tab } from '@headlessui/react';
import Heading from '@/components/ui/heading';
import ProductReviewRating from './product-review-rating';
import Link from 'next/link';
import cls from '../Product.module.scss';
import logoButterfly from '../../../assets/img/logoButterfly.png';
import { useStore } from '@/hooks/useStore';
import { Product } from '@/types/Product/product.types';

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ');
}

type ProductInfoProps = {
  detProduct: Product;
};

export const chandelierTypeArray = [
  'NONE',
  'Большие люстры',
  'С хрусталями',
  'С абажурами',
  'Подвесные',
  'Потолочные',
  'Овальные',
];

const arrayColor = [
  'NONE',
  'Золотой',
  'Бронзовый',
  'Сильвер',
  'Никель',
  'Белый',
  'Черный',
  'Прозрачный',
  'Бежевый',
  'Голубой',
  'Желтый',
  'Зеленый',
  'Коричневый',
  'Красный',
  'Оранжевый',
  'Розовый',
  'Серый',
  'Синий',
  'Фиолетовый',
];


export const ProductDetailsTab: React.FC<ProductInfoProps> = ({ detProduct }) => {

  const store = useStore();
  const collectionStore = store.collection;
  
  let [tabHeading] = useState({
    'Подробнее о позиции': ''
  });

  const collections = collectionStore.collections;

  const currCollections = React.useMemo(() => collections.find((col) => col.id == detProduct.collectionId),
    [collections],
  );

  useEffect(() => {
    // TODO поиск по id коллекции
    // getCollection({ name: detProduct.collectionId });
    collectionStore.getCollection({ name: detProduct.article?.split('/')[0] });
  }, [detProduct.collectionId]);

  return (
    <div className="w-full xl:px-2 py-11 lg:py-14 xl:py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="block border-b border-skin-base space-s-8">
          {Object.keys(tabHeading).map((item) => (
            <Tab
              key={item}
              className={({ selected }) =>
                classNames(
                  'relative inline-block transition-all text-15px lg:text-17px leading-5 text-skin-base focus:outline-none pb-3 lg:pb-5 hover:text-skin-primary',
                  selected
                    ? 'font-semibold after:absolute after:w-full after:h-0.5 after:bottom-0 after:translate-y-[1px] after:start-0 after:bg-skin-primary'
                    : ''
                )
              }
            >
              {item.split('_').join(' ')}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-6 lg:mt-9">
          <Tab.Panel className={`lg:flex ${cls.tab_wrapp}`}>
            <div className="text-sm sm:text-15px text-skin-muted leading-[2em] space-y-4 lg:space-y-5 xl:space-y-7 flex-1">
              <Heading
                variant="mediumHeading"
                className="xl:text-lg mb-4 pt-0.5"
              >
              Описание товара:
              </Heading>
              <p>
                {detProduct.description}
              </p>
              {/*<h2 className={cls.brandHeader}>Бренд: </h2>*/}
              {/*<div className={cls.brandWrapp}>*/}
              {/*  <p className={cls.brandTitle}>*/}
              {/*    НУЖЕН ТЕКСТ О БРенде Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis nesciunt molestiae debitis. Saepe quod cum ipsam sint corrupti perferendis sed. Exercitationem officia rerum nobis excepturi autem itaque inventore vitae quia!*/}
              {/*  </p>*/}
              {/*  <img src={logoButterfly.src} alt='buttlogo' width='100' height='100px' className={cls.brandImg} />*/}
              {/*</div>*/}
            </div>
            <div className="flex-shrink-0 lg:w-[400px] xl:w-[480px] 2xl:w-[550px] 3xl:w-[680px] lg:ps-10 xl:ps-14 2xl:ps-20 pt-5 lg:pt-0 flex-1">
              <Heading
                variant="mediumHeading"
                className="xl:text-lg mb-4 pt-0.5"
              >
                Тех. параметры:
              </Heading>
              <div className="border border-skin-four rounded">
                <table className="w-full text-skin-base text-15px">
                  <thead>
                  <tr className="border-b border-skin-four">
                    <th
                      className="px-4 lg:px-5 xl:px-6 pt-3 pb-4 lg:pb-6 text-start text-sm lg:text-15px xl:text-base font-medium">
                        <span className="block font-semibold pt-0.5 ewrvfbe">
                          Бренд:
                        </span>
                    </th>
                    <th
                      className={`border-s border-skin-four px-4 lg:px-5 xl:px-6 pt-3 pb-5 text-end w-24 lg:w-28 xl:w-36 font-semibold ewrvfbe ${cls.th_wr}`}>
                      <Link href={`/Brands/${detProduct?.brand?.id}`}>
                        {detProduct?.brand?.name}
                      </Link>
                    </th>
                  </tr>
                  </thead>

                  <thead>
                  <tr className="border-b border-skin-four">
                    <th
                      className="px-4 lg:px-5 xl:px-6 pt-3 pb-4 lg:pb-6 text-start text-sm lg:text-15px xl:text-base font-medium">
                        <span className="block font-semibold pt-0.5 ewrvfbe">
                          Коллекция:
                        </span>
                    </th>
                    {/* {currCollections && ( */}
                    <th
                      className={`border-s border-skin-four px-4 lg:px-5 xl:px-6 pt-3 pb-5 text-end w-24 lg:w-28 xl:w-36 font-semibold ewrvfbe ${cls.th_wr}`}>
                      <Link href={`/Brands/${detProduct?.brand?.id}/${detProduct?.collection?.id}`}>
                        {detProduct?.collection?.name}
                      </Link>
                    </th>
                    {/* )} */}
                  </tr>
                  </thead>

                  <tbody>
                  <tr className="border-b font-normal border-skin-four last:border-b-0">
                    <td className="px-4 lg:px-5 xl:px-6 py-3">
                      Цвет:
                    </td>
                    <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36">
                      {detProduct.color?.map((colors) => arrayColor[colors]).join(' / ')}
                    </td>
                  </tr>
                  {!!detProduct.height && (
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="px-4 lg:px-5 xl:px-6 py-3">
                        Высота:
                      </td>
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36">
                        {detProduct.height} см
                      </td>
                    </tr>
                  )}
                  {!!detProduct.diameter && (
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="px-4 lg:px-5 xl:px-6 py-3">
                        Диаметр:
                      </td>
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36">
                        {detProduct.diameter} см
                      </td>
                    </tr>
                  )}
                  {!!detProduct.length && (
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="px-4 lg:px-5 xl:px-6 py-3">Длинна:</td>
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36">
                        {detProduct.length} см
                      </td>
                    </tr>
                  )}
                  {!!detProduct.width && (
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="px-4 lg:px-5 xl:px-6 py-3">
                        Ширина:
                      </td>
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36">
                        {detProduct.width} см
                      </td>
                    </tr>
                  )}
                  {!!detProduct.indent && (
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="px-4 lg:px-5 xl:px-6 py-3">
                        Ширина:
                      </td>
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36">
                        {detProduct.indent} см
                      </td>
                    </tr>
                  )}
                  {!!detProduct.lampCount && (
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="px-4 lg:px-5 xl:px-6 py-3">Лампочки (Кол-во x Цоколь):</td>
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36">
                        {detProduct.lampCount} x {detProduct.plinth}
                      </td>
                    </tr>
                  )}
                  {detProduct?.type?.length ? (
                    <tr className="border-b font-normal border-skin-four last:border-b-0">
                      <td className="px-4 lg:px-5 xl:px-6 py-3">
                        Тип люстры:
                      </td>
                      <td className="border-s border-skin-four px-4 lg:px-5 xl:px-6 py-3 text-end w-24 lg:w-28 xl:w-36">
                        {detProduct.type
                          ?.map((chandelierType) => chandelierTypeArray[chandelierType])
                          .join(' / ')}
                      </td>
                    </tr>
                  ) : (<span></span>)}

                  </tbody>
                </table>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <ProductReviewRating/>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
