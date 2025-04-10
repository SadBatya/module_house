import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import { Button } from '@/shared/ui';
import style from './section-promo-project.module.scss';
import housePng from './assets/house.png';
import Image from 'next/image';

export const SectionPromoProject = () => (
  <Section>
    <div className={style.container}>
      <div className={style.card}>
        <Title>Карточка промо-проекта</Title>
        <div className={style.name}>
          <h4 className={style.model}>Модульный A-frame дом</h4>
          <span className={style.size}>33 кв.м</span>
        </div>
        <ul className={style.list}>
          <li className={style.list_item}>
            <span className={style.list_marker} />4 недели
          </li>
          <li className={style.list_item}>
            <span className={style.list_marker} />
            1’882’486 руб с отделкой
          </li>
        </ul>
        <p className={style.description}>
          Небольшой загородный дом с террасой, предназначенный для
          круглогодичного проживания на природе
        </p>
        <Button wf py="1.2" fw="400">
          Подробнее
        </Button>
      </div>
      <Image className={style.img} src={housePng} alt="house" />
    </div>
  </Section>
);
