import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import { P } from '@/shared/ui';
import { Button } from '@/shared/ui';
import housePgn from './assets/house.png';
import Image from 'next/image';
import style from './section-check.module.scss';

export const SectionCheck = () => (
  <Section className={style.section}>
    <div className={style.info}>
      <Title className={style.title}>Заказать просчет проекта</Title>
      <Image className={style.img_tablet} alt="house-project" src={housePgn} />
      <P className={style.description}>
        Вы можете создать проект дома вместе с нашими конструкторами и
        архитекторами, учитывая все ваши пожелания и предпочтения.
      </P>
      <Button className={style.button}>Рассчитать проект</Button>
    </div>
    <Image className={style.img} alt="house-project" src={housePgn} />
  </Section>
);
