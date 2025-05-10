'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import style from './Carousel.module.scss';
import { CarouselCard } from './CarouselCard';
import { carouselData } from '../model/data';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

export const Carousel = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={style.swiper_container}>
      <Swiper
        modules={[Autoplay]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        speed={3000}
        autoplay={{
          delay: 4000,
        }}
        className={style.swiper}
        breakpoints={{
          1450: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 2,
          },
          820: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.5,
          },
          340: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }}
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
