'use client';
import { Section, Title } from '@/shared/ui';
import style from './section-license.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SectionLicense = () => {
  return (
    <Section className={style.section}>
      <Title uppercase>
        <span className={style.title_color}>«ЛиЦЕНЗИИ»</span>И ГОСТ
      </Title>
      <Swiper
        spaceBetween={50}
        slidesPerView={3.5}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={style.slide}>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </Section>
  );
};
