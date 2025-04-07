'use client';

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import style from './Carousel.module.scss';

import 'swiper/css';
import 'swiper/css/pagination';

export const Carousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={style.swiper_container}>
      <h2 className={style.title}>Проекты на ваш выбор</h2>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        className={style.swiper}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      <button
        className={style.button_prev}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};
