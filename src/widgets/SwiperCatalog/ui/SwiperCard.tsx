import style from './SwiperCard.module.scss';
import { Button } from '@/shared/ui';

export const SwiperCard = () => (
  <div className={style.swiperCard}>
    <h3 className={style.title}>Одноэтажный мини-дом 4*8 с террасой 3*8м</h3>
    <ul className={style.list}>
      <li className={style.list_item}>
        <span className={style.list_marker} />4 недели
      </li>
      <li className={style.list_item}>
        <span className={style.list_marker} />
        1’882’486 руб с отделкой
      </li>
    </ul>
    <Button py="1.2" px="3.6">
      Подробнее
    </Button>
  </div>
);
