'use client';
import style from './Accordion.module.scss';
import { Slide } from '@/shared/ui/Slide/Slide';
import { houses } from '../model/data';
import { useState } from 'react';

export const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState<number>(2);

  return (
    <div className={style.slider}>
      {houses.map(({ title, id, description, img }) => (
        <Slide
          activeIndex={activeIndex}
          key={id}
          num={id}
          text={title}
          description={description}
          img={img}
          onClick={() => setActiveIndex(id)}
        />
      ))}
    </div>
  );
};
