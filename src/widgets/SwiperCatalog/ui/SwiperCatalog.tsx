'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import style from './SwiperCatalog.module.scss';
import { SwiperCard } from './SwiperCard';

import 'swiper/css';
import 'swiper/css/pagination';
import { swiperCatalogData } from '../model/data';

export const SwiperCatalog = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className={style.swiper_catalog}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        className={style.swiper}
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          834: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {swiperCatalogData.map(
          ({ img, title, time, price, description }, index) => (
            <SwiperSlide key={index}>
              <SwiperCard
                img={img}
                title={title}
                time={time}
                price={price}
                description={description}
              />
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className={style.buttons}>
        <button
          className={style.button_prev}
          onClick={() => swiperRef.current?.slidePrev()}
        />
        <button
          className={style.button_next}
          onClick={() => swiperRef.current?.slideNext()}
        />
      </div>
    </div>
  );
};
