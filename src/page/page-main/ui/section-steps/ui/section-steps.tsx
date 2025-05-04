'use client';
import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import style from './section.module.scss';

import { listData } from '../model/data';
import { ListItem } from '@/shared/ui/ListItem/ListItem';
import insidePng from './assets/inside.png';
import insideMobPng from './assets/inside_mob.jpg';

import Image from 'next/image';
import { useEffect, useState } from 'react';

export const SectionSteps = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % listData.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Section>
      <div className={style.inner}>
        <div className={style.container_text}>
          <Title>Этапы возведения вашего будущего дома</Title>
          <Image className={style.img_mob} src={insideMobPng} alt="" />
          <ul>
            {listData.map(({ title, subtext }, index) => (
              <ListItem
                index={index}
                activeIndex={activeIndex}
                title={title}
                subtext={subtext}
                key={index}
              />
            ))}
          </ul>
          <div className={style.grayBlock}>
            Общий срок строительства занимает от 3 до 6 месяцев в зависимости от
            площади, сложности проекта и уникальных особенностей
          </div>
        </div>
        <Image className={style.img} src={insidePng} alt="inside" />
      </div>
    </Section>
  );
};
