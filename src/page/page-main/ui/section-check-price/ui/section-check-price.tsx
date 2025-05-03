import { Title } from '@/shared/ui';
import { Section } from '@/shared/ui';
import Image from 'next/image';
import roomPng from './assets/room.png';
import style from './section-check-price.module.scss';
import { Form } from '@/features/Form';

export const SectionCheckPrice = () => (
  <Section className={style.section}>
    <div className={style.form}>
      <Title uppercase className={style.title}>
        Рассчитать <span className={style.color_text}>проект</span>{' '}
      </Title>
      <Form />
    </div>
    <Image className={style.img} src={roomPng} alt="room" />
  </Section>
);
