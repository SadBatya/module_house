'use client';

import { RefObject } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import style from './SwiperGallery.module.scss';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/pagination';
import { type StaticImageData } from 'next/image';

interface Props {
  swiperRef: RefObject<SwiperType | null>;
  data: readonly StaticImageData[][];
  views: 'inside' | 'outside';
}

export const SwiperGallery = ({ swiperRef, data, views }: Props) => {
  const dataIndex: 0 | 1 = views === 'inside' ? 0 : 1;

  return (
    <div className={style.swiper_gallery}>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={2.5}
        spaceBetween={15}
        speed={1000}
        loop={true}
        className={style.swiper}
        breakpoints={{
          340: {
            slidesPerView: 1.5,
            spaceBetween: 15,
          },
          834: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2.5,
            spaceBetween: 30,
          },
        }}
      >
        {data[dataIndex].map((img, index) => (
          <SwiperSlide className={style.slide} key={index}>
            <Image className={style.slide_img} src={img} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
