"use client"
import BundleCard from '@/components/cards/bundle-card';
import useWindowSize from '@/utils/use-window-size';
import cn from 'classnames';
import dynamic from 'next/dynamic';
import { SwiperSlide } from '@/components/ui/carousel/slider';
import SectionHeader from '../common/section-header';
import Link from 'next/link';
import { ROUTES } from '@/utils/routes';
const Carousel = dynamic(() => import('@/components/ui/carousel/carousel'), {
  ssr: false,
});

interface Props {
  className?: string;
  data: any;
}

const breakpoints = {
  '768': {
    slidesPerView: 2,
    spaceBetween: 16,
  },
  '0': {
    slidesPerView: 1,
    spaceBetween: 12,
  },
};

const BundleGrid: React.FC<Props> = ({ className = 'mb-12 pb-0.5', data }) => {
  const { width } = useWindowSize();

  console.log(data,'datadata')

  return (
    <div className={cn('heightFull', className)}>
      {width! < 1536 ? (
        <>
          <SectionHeader
            sectionHeading="Категория товаров"
            sectionSubHeading=""
            headingPosition="left"
          />
          <Carousel breakpoints={breakpoints}>
            {data?.map((item: any) => (
              <SwiperSlide className="werfcwqw" key={`bundle-key-${item.id}`}>
                <BundleCard
                  bundle={item}
                  href={`${ROUTES.BUNDLE}/${item.slug}`}
                />
              </SwiperSlide>
            ))}
          </Carousel>
          <div className="w9Dm_1">
            <div className="mYX0Y">
              <Link className="ui-GPFV8 doAso E52PT" href="/DostavkaOplata">
                <div className="XyfHc">
                  <div className="_xn4i">Доставим быстро!</div>
                  <div className="ARJEus">
                    <span className="ui-GPFV8 ui-d0wFj ui-IZb9T hRJEu">Подробнее</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {data?.map((item: any) => (
            <BundleCard
              key={`bundle-key-${item.id}`}
              bundle={item}
              href={`${ROUTES.BUNDLE}/${item.slug}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default BundleGrid;
