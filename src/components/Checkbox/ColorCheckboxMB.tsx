// import React from 'react';
// import cls from './ColorCheckbox.module.scss';
// import clrs from './colors.module.scss';
// import { IColorFilter } from '@/settings/site-path-cathegory';
// import {ICategoryType, IColorType} from "@/types/Product/product.dtos";
// import Image from 'next/image';
//
// interface ColorOption {
//   color: string;
//   class: string;
// }
//
// type TypeColors = {
//   headeDropdownClass?: string;
//   array: number[];
//   onChangeCategory: (id: number) => void;
//   lightCategory: ICategoryType[] | null | undefined;
// };
//
// const ColorCheckboxMB: React.FC<TypeColors> = ({ lightCategory, headeDropdownClass, array, onChangeCategory }) => {
//   return (
//     <div className={cls.new}>
//       <div className={`${cls.header__dropdown_wrap} ${cls.header__dropdown_wrap_colorcheck}`}>
//         <form>
//           {lightCategory?.map((obj: ICategoryType, i: number) => (
//             <div key={i} className={cls.form_group}>
//               <input
//                 type="checkbox"
//                 checked={!!array.find((type) => type === i + 1)}
//                 id={obj.hex}
//               />
//               <label
//                 onClick={() => onChangeCategory(i)}
//                 // className={array.find((type) => type === i + 1) ? obj.class : ''}
//                 className={`${
//                   array.find((type) => type === i + 1)
//                     // ? obj.hex : ''
//                 }`}
//                 htmlFor={`color-${obj.id}`}>
//                 <Image className={cls.wevfefwradimg} src={process.env.NEXT_PUBLIC_PHOTO_URL + 'storage/' + obj?.pic} alt={obj.name} width='100' height='100'/>
//                 <span>{obj.name}</span>
//                 {/* <span>(150)</span> */}
//               </label>
//             </div>
//           ))}
//         </form>
//       </div>
//     </div>
//   );
// };
//
// export default ColorCheckboxMB;



import React from 'react';
import cls from './ColorCheckbox.module.scss';
import clrs from './colors.module.scss';
import { IColorFilter } from '@/settings/site-path-cathegory';
import {ICategoryType, IColorType} from "@/types/Product/product.dtos";
import Image from 'next/image';

interface ColorOption {
  color: string;
  class: string;
}

type TypeColors = {
  headeDropdownClass?: string;
  array: number[];
  onChangeCategory: (id: number) => void;
  lightCategory: ICategoryType[] | null | undefined;
};

const ColorCheckboxMB: React.FC<TypeColors> = ({ lightCategory, headeDropdownClass, array, onChangeCategory }) => {
  return (
    <div className={cls.new}>
      <div className={`${cls.header__dropdown_wrap} ${cls.header__dropdown_wrap_colorcheck}`}>
        <form>
          {lightCategory?.map((obj: ICategoryType, i: number) => (
            <div key={obj.id} className={cls.form_group}>
              <input
                type="checkbox"
                checked={!!array.find((type) => type === obj.id)}
                id={obj.hex}
              />
              <label
                onClick={() => onChangeCategory(obj.id - 1)}
                // className={array.find((type) => type === i + 1) ? obj.class : ''}
                className={`${
                  array.find((type) => type === obj.id + 1)
                  // ? obj.hex : ''
                }`}
                htmlFor={`color-${obj.id}`}>
                <Image className={cls.wevfefwradimg} src={process.env.NEXT_PUBLIC_PHOTO_URL + 'storage/' + obj?.pic} alt={obj.name} width='100' height='100'/>
                <span>{obj.name}</span>
                {/* <span>(150)</span> */}
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default ColorCheckboxMB;
