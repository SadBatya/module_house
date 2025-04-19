import { Title } from '@/shared/ui';
import { Section } from '@/shared/ui';
import style from './section-guarantee.module.scss';
import Image from 'next/image';
import icon1 from './assets/icon_1.svg';
import icon2 from './assets/icon_2.svg';
import icon3 from './assets/icon_3.svg';
import checkPng from './assets/check.png';

import { Button } from '@/shared/ui';

export const SectionGuarantee = () => (
  <Section>
    <Title center>
      Три гарантии, которые вы получите <br /> в договоре строительства
    </Title>

    <div className={style.cards}>
      <div className={style.card}>
        <Image className={style.icon} src={icon1} alt="icon" />
        <p className={style.description}>Цена на строительство не меняется</p>
      </div>
      <div className={style.card}>
        <Image className={style.icon} src={icon2} alt="icon" />
        <p className={style.description}>Гарантийное обслуживание 5 лет</p>
      </div>
      <div className={style.card}>
        <Image className={style.icon} src={icon3} alt="icon" />
        <p className={style.description}>
          Сдаем дом точно <br /> в срок
        </p>
      </div>
    </div>

    <div className={style.check}>
      <Image className={style.img} src={checkPng} alt="check" />
      <p className={style.description}>
        Во время строительства дома вам будет предоставлен чек-лист, с помощью
        которого вы сможете самостоятельно проверить качество работ на всех
        этапах, от фундамента до кровли, даже без специальных строительных
        знаний.
      </p>
      <Button py="1.5" px="2.5" fw="400">
        Подобрать проект
      </Button>
    </div>
  </Section>
);
