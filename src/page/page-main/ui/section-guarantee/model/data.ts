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
    description: 'Фиксируем все требования в договоре',
  },
  {
    icon: icon_2,
    description: 'Даем 10 лет гарантию на каркас и 15 лет из камня',
  },
  {
    icon: icon_3,
    description: '0,1% штрафа за каждый день просрочки!',
  },
];
