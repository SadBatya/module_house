import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import { P } from '@/shared/ui';
import { Button } from '@/shared/ui';
import housePgn from './assets/house.png';
import Image from 'next/image';
import style from './section-check.module.scss';

export const SectionCheck = () => (
  <Section>
    <div className={style.container}>
      <div className={style.info}>
        <Title>Заказать проект</Title>
        <P className={style.description}>
          Вы можете создать проект дома вместе с нашими конструкторами и
          архитекторами, учитывая все ваши пожелания и предпочтения.
        </P>
        <Button>Рассчитать проект</Button>
      </div>
      <Image className={style.img} alt="house-project" src={housePgn}></Image>
    </div>
  </Section>
);
