import { Section, Title, P } from '@/shared/ui';
import Image from 'next/image';
import project from './assets/project.png';
import style from './section-preview.module.scss';

export const SectionPreview = () => (
  <Section className={style.section}>
    <div className={style.section_inner}>
      <div className={style.info}>
        <Title className={style.title}>
          Одноэтажный мини-дом 4*8 с террасой 3*8м
        </Title>
        <P className={style.description}>
          Лаги пола выполняются из строганной доски 45х145 мм.
        </P>
        <div className={style.characteristics}>
          <div className={style.table}>
            <ul className={style.key}>
              <li>Построен</li>
              <li>Размер</li>
              <li>Общая площадь</li>
              <li>Этажей</li>
            </ul>
            <ul className={style.value}>
              <li>ноябрь 2024</li>
              <li>6х9</li>
              <li>54</li>
              <li>2</li>
            </ul>
          </div>
          <div className={style.table}>
            <ul className={style.key}>
              <li>Комнат</li>
              <li>Заказчик</li>
              <li>Бригадир</li>
            </ul>
            <ul className={style.value}>
              <li>1</li>
              <li>Прохоров А.</li>
              <li>Кулибин Н.</li>
            </ul>
          </div>
        </div>
      </div>
      <Image className={style.image} src={project} alt="" />
    </div>
  </Section>
);
