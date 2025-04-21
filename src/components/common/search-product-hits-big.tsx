import Image from '@/components/ui/image';
import {ROUTES} from '@/utils/routes';
import {categoryPlaceholder, searchProductPlaceholder} from '@/assets/placeholders';
import cls from './Common.module.scss';
import Link from 'next/link';
import SearchProductHits from "@/components/common/search-product-hits";
import React from "react";

type SearchProductProps = {
  item: any;
};

const SearchProductHitsBig: React.FC<SearchProductProps> = ({item}) => {
  const imageUrl = item?.files?.[0]?.url;
  const imageUrlsdfdsd = imageUrl ? process.env.NEXT_PUBLIC_PHOTO_URL1 + imageUrl : categoryPlaceholder;
  return (
    <Link
      href={`${ROUTES.PRODUCT}/${item?.id}`}
      className={`group w-full h-auto flex justify-start items-center ${cls.searchproduct_wrapp}`}
    >
      <div
        className={`relative flex w-12 h-12 rounded-md overflow-hidden flex-shrink-0 cursor-pointer me-4 ${cls.searchproduct_img}`}>
        <Image
          src={imageUrl ?? searchProductPlaceholder}
          width={200}
          height={200}
          loading="eager"
          alt={item.name || 'Product Image'}
          className="bg-skin-thumbnail object-cover"
        />
      </div>

      <div className={cls.priduct_tile}>
        <div className={cls.priduct_tile_ho}>{item.name} {item.article}</div>
        <span className={`${cls.priduct_tile_pr_tw} ${cls.priduct_tile_pr}`} data-testid="price">
          {item.price} ₽
        </span>
      </div>
    </Link>
  );
};

export default SearchProductHitsBig;


