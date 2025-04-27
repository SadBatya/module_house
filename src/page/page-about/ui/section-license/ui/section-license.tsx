'use client';
import { Section } from '@/shared/ui';
import style from './section-license.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SectionLicense = () => {
  return (
    <Section className={style.section}>
      <Swiper
        spaceBetween={50}
        slidesPerView={4}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </Section>
  );
};
