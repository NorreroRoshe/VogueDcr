import React from 'react';
import cls from './ColorCheckbox.module.scss';
import clrs from './colors.module.scss';
import { IColorFilter } from '@/settings/site-path-cathegory';
import {ICategoryType, IColorType, IType} from "@/types/Product/product.dtos";

interface ColorOption {
  id: number;
  color: string;
  class: string;
}

const colors: ColorOption[] = [
  { id: 1, color: 'Золотой', class: 'gold' },
  { id: 2, color: 'Бронзовый', class: 'bronze' },
  { id: 3, color: 'Сильвер', class: 'matsil' },
  { id: 4, color: 'Никель', class: 'nickel' },
  { id: 5, color: 'Хром', class: 'chrome' },
  { id: 6, color: 'Белый', class: 'white' },
  { id: 7, color: 'Черный', class: 'black' },
  { id: 8, color: 'Прозрачный', class: 'clear' },
  { id: 9, color: 'Бежевый', class: 'bej' },
];

type TypeColors = {
  headeDropdownClass?: string;
  array: number[];
  onChangeCategory: (id: number) => void;
  lightCategory: ICategoryType[] | null | undefined;
};

const Colorcheckbox: React.FC<TypeColors> = ({ array, onChangeCategory, lightCategory, headeDropdownClass }) => {
  return (
    <div className={cls.new}>
      <div className={`${cls.header__dropdown_wrap} ${cls.header__dropdown_wrap_colorcheck}`}>
        <form>
          {colors?.map((obj: ColorOption) => (
            <div key={obj.id} className={cls.form_group}>
              <input
                type="checkbox"
                checked={!!array.find((type) => type === obj.id)}
                id={obj.class}
              />
              <label
                onClick={() => onChangeCategory(obj.id - 1)}
                // className={array.find((type) => type === i + 1) ? obj.class : ''}
                className={`${clrs[obj.class]} ${
                  array.find((type) => type === obj.id + 1) ? obj.class : ''
                }`}
                htmlFor={obj.class}>
                <span>{obj.color}</span>
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Colorcheckbox;
