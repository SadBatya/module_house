import style from './Accordion.module.scss';
import { Slide } from '@/shared/ui/Slide/Slide';
import { houses } from '../model/data';

export const Accordion = () => {
  return (
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
  );
};
