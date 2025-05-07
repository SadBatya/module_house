'use client';

import { Section, Title, P, Button } from '@/shared/ui';
import style from './section-reviews.module.scss';
import { reviews } from '../model/data';
import { ReviewCard } from '@/widgets/ReviewCard';
import { useRef, useState } from 'react';

import { EffectFade } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import 'swiper/css/effect-fade';

export const SectionReviews = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  const onSlideNext = () => {
    swiperRef.current?.slideNext();
  };

  const onSlidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const formatNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  return (
    <Section>
      <div className={style.top}>
        <Title className={style.title}>Отзывы наших клиентов</Title>
        <P className={style.description}>
          Реальные отзывы о нашей компании вы можете посмотреть на независимых
          сайтах
        </P>
        <Button className={style.button}>Подобрать проект для себя</Button>
      </div>

      <Swiper
        effect={'fade'}
        fadeEffect={{
          crossFade: true,
        }}
        speed={1000}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
        navigation={true}
        modules={[EffectFade]}
        slidesPerView={1}
        mousewheel={true}
        spaceBetween={30}
        loop={true}
        className={style.swiper}
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index} className={style.swiper_slide}>
            <ReviewCard {...review} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={style.navigation}>
        <div className={style.slide_numbers}>
          {formatNumber(currentSlide)} / {formatNumber(reviews.length)}
        </div>
        <div className={style.swiper_buttons}>
          <button onClick={onSlidePrev} className={style.prev_button} />
          <button onClick={onSlideNext} className={style.next_button} />
        </div>
      </div>
    </Section>
  );
};
