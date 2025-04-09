import style from './SwiperCard.module.scss';
import { Button } from '@/shared/ui';
import Image, { type StaticImageData } from 'next/image';

interface Props {
  img: StaticImageData;
  title?: string;
  time?: string;
  price?: string;
  description: string;
}

export const SwiperCard = ({ img, title, time, price, description }: Props) => (
  <div className={style.swiperCard}>
    <Image
      className={style.img}
      src={img}
      alt="home"
      width={283}
      height={280}
    />
    <h3 className={style.title}>{title}</h3>
    <ul className={style.list}>
      <li className={style.list_item}>
        <span className={style.list_marker} />
        {time}
      </li>
      <li className={style.list_item}>
        <span className={style.list_marker} />
        {price}
      </li>
    </ul>
    <p className={style.description}>{description}</p>
    <Button py="1.2" px="3.6" fz="1.6" fw="400">
      Подробнее
    </Button>
  </div>
);
