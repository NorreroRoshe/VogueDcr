"use client"
import Link from 'next/link';
import { LinkProps } from 'next/link';
import Image from 'next/image';
import SectionHeader from '../common/section-header';
import cls from '../GoodsCatalogue/GoodsCatalogue.module.scss';
import {ICategoryType} from "@/types/Product/product.dtos";
import {observer} from "mobx-react";
import {usePathname} from "next/navigation";

interface Props {
  imgWidth?: number | string;
  imgHeight?: number | string;
  className?: string;
  thumbnailClassName?: string;
  href?: LinkProps['href'];
  bundle: ICategoryType;
  //     {
  //   href?: string;
  //   types?: string;
  //   mainPhoto?: string;
  //   subName?: string;
  // };
  shouldDisplay?: boolean;
}

const BundleCardCategory: React.FC<Props>  = observer(({
  bundle, shouldDisplay
}) => {
  const pathname = usePathname();

  const pathSegments = pathname.split("/").filter(Boolean); // Разбиваем путь на части

  // const { image, title, description } = bundle;
  return (
    <>
      <div className={cls.catalogDepartmentCategories}>
         {/*{bundle?.map((item) => (*/}
          <div className={cls.catalogCategoryCell}>
            <Link href={shouldDisplay ? `${pathSegments[1]}/${bundle?.EngName}` : `${pathSegments[0]}/${bundle?.EngName}`} className={cls.catalogCategoryCellLink}>
            <div className={cls.catalogCategory}>
                <div className={cls.catalogCategoryImageContainer}>
                  <Image
                    width={200}
                    height={200}
                    src={process.env.NEXT_PUBLIC_PHOTO_URL + 'storage/' + bundle.pic}
                    alt={(bundle.name) ?? ''}
                    draggable="false"
                    loading="lazy"
                    className={`${cls.lazyImg} ${cls.catalogCategoryImage}`}
                  />
                </div>
                <div className={cls.catalogCategoryTitleWrapper}>
                  <h3 className={cls.catalogCategoryTitle}>{bundle.name}</h3>
                </div>
              </div>
            </Link>
          </div>
         {/*))}*/}
      </div>
    </>
          
  );
});

export default BundleCardCategory;
