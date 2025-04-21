"use client"
import BundleCardCategory from '@/components/cards/bundle-card-category';
import useWindowSize from '@/utils/use-window-size';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { SwiperSlide } from '@/components/ui/carousel/slider';
import SectionHeader from '../common/section-header';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';
import {ICategoryType} from "@/types/Product/product.dtos";
import {observer} from "mobx-react";
import {usePathname} from "next/navigation";
const Carousel = dynamic(() => import('@/components/ui/carousel/carousel'), {
  ssr: false,
});

interface Props {
  className?: string;
  data?: ICategoryType[];
  shouldDisplay?: boolean;
  productTypeName: string;
}

const breakpoints = {
  '1002': {
    slidesPerView: 4,
    spaceBetween: 16,
  },
  '840': {
    slidesPerView: 3,
    spaceBetween: 16,
  },
  '0': {
    slidesPerView: 2,
    spaceBetween: 12,
  },
};

const BundleGridCategory: React.FC<Props> = observer(({ className = 'mb-12 pb-0.5', data, productTypeName, shouldDisplay }) => {
  const { width } = useWindowSize();
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean); // Разбиваем путь на части

  return (
    <div className={cn('heightFull', className)}>
      {width! < 1536 ? (
        <>
          <SectionHeader
            sectionHeading={`Категория: ${productTypeName}`}
            sectionSubHeading=""
            headingPosition="left"
            className='ewvref'
          />
          <Carousel breakpoints={breakpoints}>
            {data?.map((item) => (
              <SwiperSlide key={`bundle-key-${item.id}`}>
                <BundleCardCategory
                  bundle={item}
                  href={shouldDisplay ? `${pathSegments[1]}/${item?.EngName}` : `${pathSegments[0]}/${item?.EngName}`}
                  shouldDisplay={shouldDisplay}
                />
              </SwiperSlide>
            ))}
          </Carousel>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data?.map((item) => (
            <BundleCardCategory
              key={`bundle-key-${item.id}`}
              bundle={item}
              href={shouldDisplay ? `${pathSegments[1]}/${item?.EngName}` : `${pathSegments[0]}/${item?.EngName}`}
              shouldDisplay={shouldDisplay}
            />
          ))}
        </div>
      )}
    </div>
  );
});

export default BundleGridCategory;
