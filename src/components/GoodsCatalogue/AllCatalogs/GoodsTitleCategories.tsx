import cls from '../GoodsCatalogue.module.scss';
import SectionHeader from '../../common/section-header';
import { ISubcategory, ISiteCategory } from '@/settings/site-path-cathegory';
import Image from 'next/image';
import { usePathname } from "next/navigation";
import {useStore} from "@/hooks/useStore";

export interface ICatalogCategories {
  CategoriesArray?: number | undefined;
}

export const GoodsTitleCategories: React.FC<ICatalogCategories> = ({ CategoriesArray }) => {
  const pathname = usePathname();

  const store = useStore();
  const productStore = store.product;

  const filterСategories = productStore.categoriesFil;

  const matchingSubcategory = filterСategories?.find(
      (subcategory) => subcategory.id === CategoriesArray
  );

  // Если подкатегория найдена, используем её subName, иначе categoryName
  const categoryName = matchingSubcategory?.name || '';
  const categoryImage = process.env.NEXT_PUBLIC_PHOTO_URL + 'storage/' + (matchingSubcategory?.pic || '');

  return (
    <>
      <div className={`${cls.catalogDepartmentCategories_title} ${cls.catalogDepartmentCategories}`}>
        <div className={cls.catalogCategoryCell}>
          <div className={`${cls.catalogCategoryCellLink} ${cls.catalogCategoryCellLink_title}`}>
            <div className={`${cls.catalogCategory} ${cls.catalogCategory_title}`}>
              <div className={`${cls.catalogCategoryImageContainer} ${cls.catalogCategoryImageContainer_title}`}>
                <Image
                  width={200}
                  height={200}
                  src={categoryImage}
                  alt={categoryName}
                  draggable="false"
                  loading="lazy"
                  className={`${cls.lazyImg} ${cls.catalogCategoryImage}`}
                />
              </div>
            </div>
            <SectionHeader
              sectionHeading={`${categoryName}`}
              sectionSubHeading=""
              headingPosition="left"
              className={cls.cectionHeader_title}
            />
          </div>
        </div>
      </div>
    </>
  );
}