'use client'
import cls from './Checkbox.module.scss';
// import "simplebar"; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
// import "simplebar/dist/simplebar.css";

import {ICategoryType, IType} from "@/types/Product/product.dtos";

type TypeLightMBProps = {
  headeDropdownClass?: string;
  array: number[];
  onChangeCategory: (id: number) => void;
  lightCategory: ICategoryType[] | null | undefined;
};

const TypeLightMB: React.FC<TypeLightMBProps> = ({
  array,
  onChangeCategory,
  lightCategory,
  headeDropdownClass,
}) => {

  return (
    <div className={cls.new}>
      <form>
        <div className={`${cls.header__dropdown_wrap} ${cls.headeDropdownClass}`}>
          {lightCategory?.map((obj: ICategoryType, i: number) => (
            <div key={obj.id} className={cls.form_group}>
              <input
                type="checkbox"
                checked={!!array.find((type) => type === obj.id)}
                id={obj.name}
              />
              <label
                onClick={() => onChangeCategory(obj.id - 1)}
                className={array.find((type) => type === obj.id + 1) ? cls.form_group : ''}
                htmlFor={obj.name}>
                {obj.name}
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default TypeLightMB;