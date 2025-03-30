import { Title } from '@/shared/ui/Title/Title';
import style from './SliderHouses.module.scss';
import { Slide } from '@/shared/ui/Slide/Slide';

export const SliderHouses = () => {
  return (
    <div className={style.section}>
      <Title>Что мы строим?</Title>
      <Slide />
    </div>
  );
};
