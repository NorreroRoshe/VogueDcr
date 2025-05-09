'use client'
import {
  Swiper,
  SwiperSlide,
  Navigation,
  Thumbs,
} from '@/components/ui/carousel/slider';
import { SwiperOptions } from 'swiper/types';
// import Image from '@/components/ui/image';
import { useRef, useState } from 'react';
import cn from 'classnames';
import { getDirection } from '@/utils/get-direction';
import { useRouter } from 'next/navigation';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { Product } from '@/types/Product/product.types';
import RightArr from "@/components/iconsCode/right-arr";
import LeftArr from "@/components/iconsCode/left-arr";
import Image from "next/image";

interface Props {
  gallery?: any[];
  thumbnailClassName?: string;
  galleryClassName?: string;
  popupProduct?: Product;

}

// product gallery breakpoints
const galleryCarouselBreakpoints = {
  '0': {
    slidesPerView: 4,
  },
};

// const swiperParams: SwiperOptions = {
//   slidesPerView: 1,
//   spaceBetween: 0,
// };

const swiperParams: SwiperOptions = {
  slidesPerView: 1,
  effect: 'fade',
  fadeEffect: { crossFade: true },
  speed: 0,
  allowTouchMove: true,
};

const ThumbnailCarousel: React.FC<Props> = ({
  thumbnailClassName = 'xl:w-[480px] 2xl:w-[650px]',
  galleryClassName = 'xl:w-28 2xl:w-[130px]',
  popupProduct
}) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);
  // const { locale } = useRouter();
  const dir = getDirection('ltr');
  
  return (
    <div className="w-full xl:flex" style={{flexDirection: 'column'}}>
      {/*xl:flex-row-reverse*/}
      <div
        className={cn(
          'w-full overflow-hidden rounded-md relative sedweqfcfdg',
          // border border-skin-base
          thumbnailClassName
        )}
      >
        <Swiper
        id="productGallery"
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Navigation, Thumbs]}
        navigation={{
          prevEl: prevRef.current!,
          nextEl: nextRef.current!,
        }}
        {...swiperParams} // Применяем новые настройки
      >
          {popupProduct?.files?.map((file, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center"
            >
              <Image
                src={file.url}
                alt={`Product Image ${index + 1}`}
                width={600}
                height={600}
                className="rounded-lg object-contain"
                style={{ maxHeight: '600px'}}
              />
              {/*<img*/}
              {/*  src={*/}
              {/*  // process.env.NEXT_PUBLIC_PHOTO_URL1 +*/}
              {/*    file.url}*/}
              {/*  alt={`Product Image ${index + 1}`}*/}
              {/*  width='85%'*/}
              {/*  height='100%'*/}
              {/*  className="rounded-lg object-contain"*/}
              {/*  style={{ maxHeight: '600px'}}*/}
              {/*/>*/}
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-between w-full absolute top-2/4 z-10 px-2.5 eqwretgnr">
          <div
            ref={prevRef}
            className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center cursor-pointer justify-center transition duration-300 transform -translate-y-1/2"
          >
            {dir === 'rtl' ? <RightArr /> : <LeftArr />}
          </div>
          <div
            ref={nextRef}
            className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center justify-center cursor-pointer transition duration-300 transform -translate-y-1/2"
          >
            {dir === 'rtl' ? <LeftArr /> : <RightArr />}
          </div>
        </div>
      </div>
      {/* End of product main slider */}

      <div className={`flex-shrink-0`}>
       {/*${galleryClassName}*/}
        <Swiper
          id="productGalleryThumbs"
          onSwiper={setThumbsSwiper}
          spaceBetween={0}
          watchSlidesProgress={true}
          freeMode={true}
          observer={true}
          observeParents={true}
          breakpoints={galleryCarouselBreakpoints}
        >
          {popupProduct?.files?.map((file, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center cursor-pointer rounded overflow-hidden border border-skin-base transition hover:opacity-75"
            >
              <Image
                src={
                // process.env.NEXT_PUBLIC_PHOTO_URL1 +
                  file.url}
                alt={`Product ${index + 1}`}
                width={170}
                height={170}
                className="object-contain"
                style={{ maxHeight: '80px'}}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ThumbnailCarousel;











//
//
// 'use client'
// import {
//   Swiper,
//   SwiperSlide,
//   Navigation,
//   Thumbs,
// } from '@/components/ui/carousel/slider';
// import { SwiperOptions } from 'swiper/types';
// // import Image from '@/components/ui/image';
// import { useRef, useState } from 'react';
// import cn from 'classnames';
// import { getDirection } from '@/utils/get-direction';
// import { useRouter } from 'next/navigation';
// import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
// import { Product } from '@/types/Product/product.types';
//
// interface Props {
//   gallery?: any[];
//   thumbnailClassName?: string;
//   galleryClassName?: string;
//   popupProduct?: Product;
//
// }
//
// // product gallery breakpoints
// const galleryCarouselBreakpoints = {
//   '0': {
//     slidesPerView: 4,
//   },
// };
//
// const swiperParams: SwiperOptions = {
//   slidesPerView: 1,
//   spaceBetween: 0,
// };
//
// const ThumbnailCarousel: React.FC<Props> = ({
//                                               thumbnailClassName = 'xl:w-[480px] 2xl:w-[650px]',
//                                               galleryClassName = 'xl:w-28 2xl:w-[130px]',
//                                               popupProduct
//                                             }) => {
//   const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
//   const prevRef = useRef<HTMLDivElement>(null);
//   const nextRef = useRef<HTMLDivElement>(null);
//   // const { locale } = useRouter();
//   const dir = getDirection('ltr');
//
//   return (
//     <div className="w-full xl:flex" style={{flexDirection: 'column'}}>
//       {/*xl:flex-row-reverse*/}
//       <div
//         style={{ display: 'flex', justifyContent: 'center', padding: '45px' }}
//         className={cn(
//           'w-full xl:ms-5 mb-2.5 md:mb-3 border border-skin-base overflow-hidden rounded-md relative',
//           // border border-skin-base
//           thumbnailClassName
//         )}
//       >
//         <Swiper
//           id="productGallery"
//           thumbs={{ swiper: thumbsSwiper }}
//           modules={[Navigation, Thumbs]}
//           navigation={{
//             prevEl: prevRef.current!, // Assert non-null
//             nextEl: nextRef.current!, // Assert non-null
//           }}
//           {...swiperParams}
//         >
//           {popupProduct?.files?.map((file, index) => (
//             <SwiperSlide
//               key={index}
//               className="flex items-center justify-center"
//             >
//               <img
//                 src={file.url}
//                 alt={`Product Image ${index + 1}`}
//                 width={650}
//                 height={590}
//                 className="rounded-lg"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         <div className="flex items-center justify-between w-full absolute top-2/4 z-10 px-2.5">
//           <div
//             ref={prevRef}
//             className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center cursor-pointer justify-center rounded-full bg-skin-fill transition duration-300 hover:bg-skin-primary hover:text-skin-inverted focus:outline-none transform -translate-y-1/2 shadow-navigation"
//           >
//             {dir === 'rtl' ? <IoIosArrowForward /> : <IoIosArrowBack />}
//           </div>
//           <div
//             ref={nextRef}
//             className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 xl:w-10 xl:h-10 text-base lg:text-lg xl:text-xl flex items-center justify-center cursor-pointer rounded-full bg-skin-fill  transition duration-300 hover:bg-skin-primary hover:text-skin-inverted focus:outline-none transform -translate-y-1/2 shadow-navigation"
//           >
//             {dir === 'rtl' ? <IoIosArrowBack /> : <IoIosArrowForward />}
//           </div>
//         </div>
//       </div>
//       {/* End of product main slider */}
//
//       <div className={`flex-shrink-0 ${galleryClassName}`}>
//         <Swiper
//           id="productGalleryThumbs"
//           onSwiper={setThumbsSwiper}
//           spaceBetween={0}
//           watchSlidesProgress={true}
//           freeMode={true}
//           observer={true}
//           observeParents={true}
//           breakpoints={galleryCarouselBreakpoints}
//         >
//           {popupProduct?.files?.map((file, index) => (
//             <SwiperSlide
//               key={index}
//               className="flex items-center justify-center cursor-pointer rounded overflow-hidden border border-skin-base transition hover:opacity-75"
//             >
//               <img
//                 src={file.url}
//                 alt={`Product ${index + 1}`}
//                 width={170}
//                 height={170}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// };
//
// export default ThumbnailCarousel;
