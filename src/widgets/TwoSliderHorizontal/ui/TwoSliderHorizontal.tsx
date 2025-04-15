'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import style from './TwoSliderHorizontal.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';
import { sliderImages } from '../model/data';
import { Autoplay } from 'swiper/modules';

export const TwoSliderHorizontal = () => {
  return (
    <div className={style.swiper_catalog}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={10000}
        className={style.swiper}
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide className={style.slide} key={index}>
            <Image className={style.img} src={item} alt="project" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={10000}
        className={style.swiper}
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide className={style.slide} key={index}>
            <Image className={style.img} src={item} alt="project" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
