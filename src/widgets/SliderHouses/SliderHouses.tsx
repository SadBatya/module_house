import { Title } from '@/shared/ui/Title/Title';
import style from './SliderHouses.module.scss';
import { Slide } from '@/shared/ui/Slide/Slide';
import { houses } from './model/data';

export const SliderHouses = () => {
  return (
    <div className={style.section}>
      <Title>Что мы строим?</Title>
      <div className={style.slider}>
        {houses.map(({ text, id, description, img }) => (
          <Slide
            key={id}
            num={id}
            text={text}
            description={description}
            img={img}
          />
        ))}
      </div>
    </div>
  );
};
