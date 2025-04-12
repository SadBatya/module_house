import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import style from './section.module.scss';

import { listData } from '../model/data';
import { ListItem } from '@/shared/ui/ListItem/ListItem';
import insidePng from './assets/inside.png';
import Image from 'next/image';

export const SectionSteps = () => (
  <Section>
    <div className={style.inner}>
      <div className={style.container_text}>
        <Title>Этапы возведения вашего будущего дома</Title>
        <ul>
          {listData.map(({ title, subtext }, index) => (
            <ListItem title={title} subtext={subtext} key={index} />
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
