'use client';

import { Section } from '@/shared/ui';
import style from './section-license.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Swiper as SwiperType } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/pagination';

export const SectionLicense = () => {
  return (
    <Section className={style.section}>
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
