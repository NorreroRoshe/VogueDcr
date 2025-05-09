'use client'
import { useState } from 'react';
import Button from '@/components/ui/button';
import Heading from '@/components/ui/heading';
import Contact from '@/components/contact/contact';
import Address from './address';
import DeliveryNotes from './delivery-instruction';
import DeliverySchedule from './schedule';
import SposobOplati from './sposobOplati';
import DeliveryTips from './delivery-tips';
import {observer} from "mobx-react";
import { useTranslation } from 'next-i18next';

const data = [
  // {
  //   id: 1,
  //   title: 'Адрес доставки',
  //   component: <Address />,
  // },
  // {
  //   id: 2,
  //   title: 'Дата доставки',
  //   component: <DeliverySchedule />,
  // },
  {
    id: 3,
    title: 'Контактная информация',
    component: <Contact />,
  },
  {
    id: 4,
    title: 'Комментарий к заказу',
    component: <DeliveryNotes />,
  },
  // {
  //   id: 5,
  //   title: 'Способ оплаты',
  //   component: <SposobOplati />,
  // },
];

const CheckoutDetails: React.FC = observer (() => {
  const { t } = useTranslation('common');
  const [bindIndex, setBindIndex] = useState(0);
  const changeItem = (itemIndex: any) => {
    if (itemIndex !== bindIndex) {
      setBindIndex(itemIndex);
    }
  };
  return (
    <div className="border border-skin-base bg-skin-fill rounded-md">
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`accordion__panel ${!(data?.length - 1 === index) ? 'border-b border-skin-base' : ''
              } ${bindIndex !== index ? 'collapsed' : 'expanded'}
            `}
            onClick={() => changeItem(index)}
          >
            <div
              id={`index_${index}`}
              className="flex items-center p-4 sm:p-8 cursor-pointer pb-6 accordion__button"
            >
              <span className="h-9 w-9 flex items-center justify-center rounded-full border-2 border-current text-skin-primary me-3 font-semibold">
                {index + 1}
              </span>
              <Heading>{t(item?.title)}</Heading>
            </div>

            <div
              data-aria-label={`index_${index}`}
              className={`ps-5 sm:ps-9 lg:ps-20 sm:pe-9 pe-5 pb-6 accordion__content`}
            >
              <div className="mb-6">{item?.component}</div>
              {!(data?.length - 1 === index) ? (
                <div className="text-end">
                  <Button
                    onClick={() => changeItem(index + 1)}
                    variant="formButton"
                    className="bg-skin-primary text-skin-inverted rounded font-semibold font-[14px] px-4 py-3 "
                  >
                    {t('Следующий шаг')}
                  </Button>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default CheckoutDetails;
