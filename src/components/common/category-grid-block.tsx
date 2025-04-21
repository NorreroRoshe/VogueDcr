import dynamic from 'next/dynamic';
import CategoryCard from '@/components/cards/category-card';
import SectionHeader from '@/components/common/section-header';
import CategoryCardLoader from '@/components/ui/loaders/category-card-loader';
import { useCategoriesQuery } from '@/framework/basic-rest/category/get-all-categories';
import { ROUTES } from '@/utils/routes';
import Alert from '@/components/ui/alert';
import { SwiperSlide } from 'swiper/react';
import useWindowSize from '@/utils/use-window-size';
import { LIMITS } from '@/framework/basic-rest/utils/limits';
const Carousel = dynamic(() => import('@/components/ui/carousel/carousel'), {
  ssr: false,
});
import cls from './Common.module.scss'
import {useEffect} from "react";
import {useStore} from "@/hooks/useStore";
import {observer} from "mobx-react";

interface CategoriesProps {
  className?: string;
}
const breakpoints = {
  '1670': {
    slidesPerView: 6,
    spaceBetween: 24,
  },
  '1500': {
    slidesPerView: 5,
    spaceBetween: 20,
  },
  '1200': {
    slidesPerView: 4,
    spaceBetween: 20,
  },
  '925': {
    slidesPerView: 4,
    spaceBetween: 15,
  },
  '580': {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  '0': {
    slidesPerView: 2,
    spaceBetween: 15,
  },
};

const CategoryGridBlock: React.FC<CategoriesProps> = observer(({
  className = 'md:pt-3 lg:pt-0 3xl:pb-2 mb-12 sm:mb-14 md:mb-16 xl:mb-24 2xl:mb-16',
}) => {

  const store = useStore();

  const productStore = store.product;

  const { data, isLoading, error } = useCategoriesQuery({
    limit: LIMITS.CATEGORIES_LIMITS,
  });


  return (
    <div className={`${className} ${cls.mtfifth}`}>
      <SectionHeader
        sectionHeading="Новые поступления"
        sectionSubHeading=""
        headingPosition="left"
      />
      <div className="block justify-center flex-wrap 3xl:-mx-3.5">
        {/*{error ? (*/}
        {/*  <Alert message={error?.message} className="mb-14 3xl:mx-3.5" />*/}
        {/*) : (*/}
          <Carousel
            autoplay={false}
            breakpoints={breakpoints}
            buttonGroupClassName="-mt-5 md:-mt-4 lg:-mt-5"
          >
            {productStore.isLoading
            // && !productStore.newItems
              ? Array.from({ length: 6 }).map((_, idx) => {
                return (
                  <SwiperSlide key={`category--key-${idx}`}>
                    <CategoryCardLoader uniqueKey={`category-card-${idx}`} />
                  </SwiperSlide>
                );
              })
              : productStore.newItems?.map((category) => (
                <SwiperSlide key={`category--key-${category.id}`}>
                  <CategoryCard
                    item={category}
                    href={{
                      pathname: ROUTES.PRODUCT + '/' + category.id,
                    }}
                  />
                </SwiperSlide>
              ))}
          </Carousel>
        {/*)*/}
        {/*}*/}
      </div>
    </div>
  );
});

export default CategoryGridBlock;
