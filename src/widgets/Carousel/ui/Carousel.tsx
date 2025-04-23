'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import style from './Carousel.module.scss';
import { CarouselCard } from './CarouselCard';
import { carouselData } from '../model/data';

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
        spaceBetween={150}
        loop={true}
        className={style.swiper}
      >
        {carouselData.map(({ description, title, bgImage }, index) => (
          <SwiperSlide key={index}>
            <CarouselCard
              description={description}
              title={title}
              bgImage={bgImage}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <button
        className={style.button_prev}
        onClick={() => swiperRef.current?.slideNext()}
      />
    </div>
  );
};
