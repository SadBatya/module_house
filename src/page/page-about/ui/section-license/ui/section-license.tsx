'use client';

import { Section, Title } from '@/shared/ui';
import style from './section-license.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export const SectionLicense = () => {
  return (
    <Section className={style.section}>
      <Title uppercase className={style.title}>
        <span className={style.title_color}>ЛиЦЕНЗИИ </span> И ГОСТ
      </Title>
      <Swiper
        spaceBetween={20}
        slidesPerView={3.5}
        loop={true}
        className={style.swiper}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={style.swiper_slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>Slide 5</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>Slide 6</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>Slide 7</SwiperSlide>
        <SwiperSlide className={style.swiper_slide}>Slide 8</SwiperSlide>
      </Swiper>
    </Section>
  );
};
