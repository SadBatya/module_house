import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import Image from 'next/image';
import style from './section-about.module.scss';
import aboutPng from './assets/about.jpg';

export const SectionAbout = () => (
  <Section>
    <div className={style.inner}>
      <Image className={style.img} src={aboutPng} alt="men" />
      <div className={style.info}>
        <Title>Мы дома</Title>
        <p className={style.description}>
          В 2006 году мы начинали с небольшой строительной компании,
          специализировавшись на набирающих тогда популярность каркасных домах.
          Сейчас за 15 лет мы построили дома более чем для 2000 семей, которые
          воспитывают в них детей, с комфортном размещают своих гостей и
          проводят незабываемые моменты жизни. Для нас принципиально важно,
          чтобы ничто их не омрачало, и мы делаем все возможное, чтобы качество
          любого проекта было исключительно высоким, неважно, какой ценовой
          категории.
        </p>
      </div>
    </div>
  </Section>
);
