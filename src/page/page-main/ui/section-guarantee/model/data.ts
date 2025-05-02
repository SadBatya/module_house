import { StaticImageData } from 'next/image';
import icon_1 from '../ui/assets/icon_1.svg';
import icon_2 from '../ui/assets/icon_2.svg';
import icon_3 from '../ui/assets/icon_3.svg';
import { ReactNode } from 'react';

interface ICardInfo {
  icon: StaticImageData;
  description: string | ReactNode;
}

export const cardInfo: ICardInfo[] = [
  {
    icon: icon_1,
    description: 'Цена на строительство не меняется',
  },
  {
    icon: icon_2,
    description: 'Гарантийное обслуживание 5 лет',
  },
  {
    icon: icon_3,
    description: 'Сдаем дом точно в срок',
  },
];
