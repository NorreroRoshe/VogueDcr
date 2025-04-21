"use client"
import Image from '@/components/ui/image';
import Link, { LinkProps } from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/navigation';
import { getDirection } from '@/utils/get-direction';
import cn from 'classnames';
import { categoryPlaceholder } from '@/assets/placeholders';

interface Props {
  item: any;
  href: LinkProps['href'];
  className?: string;
}

const CategoryCard: React.FC<Props> = ({ item, href, className }) => {
  const { t } = useTranslation('common');
  // const { locale } = useRouter();
  const dir = getDirection('ltr');

  let widthClass = 'w-[280px]';
  let heightClass = 'h-[235px]';

  if (window.innerWidth < 1600) {
    widthClass = 'w-[230px]';
    heightClass = 'h-[175px]';
  }

  if (window.innerWidth < 1400) {
    widthClass = 'w-[175px]';
    heightClass = 'h-[175px]';
  }

  if (window.innerWidth < 1100) {
    widthClass = 'w-[160px]';
    heightClass = 'h-[175px]';
  }

  if (window.innerWidth < 650) {
    widthClass = 'w-[150px]';
    heightClass = 'h-[150px]';
  }

  if (window.innerWidth < 580) {
    widthClass = 'w-[100px]';
    heightClass = 'h-[100px]';
  }

  if (window.innerWidth < 440) {
    widthClass = 'w-[125px]';
    heightClass = 'h-[125px]';
  }

  const imageUrl = item?.files?.[0]?.url;
  const imageUrl1 = item?.files?.[1]?.url;

  const imageUrlsdfdsd = imageUrl ? process.env.NEXT_PUBLIC_PHOTO_URL1 + imageUrl : categoryPlaceholder;
  const imageUrlsdfdsd1 = imageUrl1 ? process.env.NEXT_PUBLIC_PHOTO_URL1 + imageUrl1 : imageUrl1;


  // return (
  //   <Link
  //     href={href}
  //     className={cn('group block w-full text-center', className)}
  //   >
  //     <div className={`flex ${widthClass} ${heightClass} mb-3.5 xl:mb-4 mx-auto overflow-hidden bg-skin-thumbnail`}
  //       style={{ borderRadius: '15                                                                                    px' }}>
  //       <div
  //         className={`flex flex-shrink-0 transition-all duration-700 w-full h-full transform scale-50 group-hover:scale-100 ${dir === 'rtl'
  //           ? 'translate-x-full group-hover:translate-x-0'
  //           : '-translate-x-full group-hover:translate-x-0'
  //           }`}
  //       >
  //         <Image
  //           src={imageUrl1 ?? imageUrl}
  //           alt={item.name || t('text-card-thumbnail')}
  //           width={500}
  //           height={235}
  //           quality={100}
  //           className="object-cover"
  //           style={{ borderRadius: '15                                                                                    px' }}
  //         />
  //       </div>
  //       <div
  //         className={`flex flex-shrink-0 transition-all duration-700 w-full h-full transform scale-100 group-hover:scale-50 ${dir === 'rtl'
  //           ? 'translate-x-full group-hover:translate-x-0'
  //           : '-translate-x-full group-hover:translate-x-0'
  //           }`}
  //       >
  //         <Image
  //           src={imageUrl ?? categoryPlaceholder}
  //           alt={item.name || t('text-card-thumbnail')}
  //           width={300}
  //           height={235}
  //           quality={100}
  //           className="object-cover"
  //           style={{ borderRadius: '15                                                                                    px' }}
  //         />
  //       </div>
  //     </div>
  //     <h3 className="capitalize text-skin-base text-sm sm:text-15px lg:text-base truncate">
  //       {item.name} + {item.article}
  //     </h3>
  //   </Link>
  // );
  return (
    <Link
      href={href}
      className={cn('group block w-full text-center', className)}
    >
      <div
        className={`relative flex ${widthClass} ${heightClass} mb-3.5 xl:mb-4 mx-auto overflow-hidden bg-skin-thumbnail`}
        style={{ borderRadius: '5px' }}
      >
        {/* Первая картинка */}
        <Image
          src={imageUrl ?? categoryPlaceholder}
          alt={item.name || t('text-card-thumbnail')}
          width={500}
          height={235}
          quality={100}
          className="object-cover absolute inset-0 w-full h-full transition-opacity duration-500 opacity-100 group-hover:opacity-0"
          style={{ borderRadius: '5px' }}
        />

        {/* Вторая картинка */}
        <Image
          src={imageUrl1 ?? imageUrl}
          alt={item.name || t('text-card-thumbnail')}
          width={500}
          height={235}
          quality={100}
          className="object-cover absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
          style={{ borderRadius: '5px' }}
        />
      </div>

      <h3 className="capitalize text-skin-base text-sm sm:text-15px lg:text-base truncate">
        {item.name} + {item.article}
      </h3>
    </Link>
  );

};

export default CategoryCard;
