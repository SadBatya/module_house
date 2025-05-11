'use client';

import { useRef, useState } from 'react';
import style from './section-gallery.module.scss';
import { Section, Title } from '@/shared/ui';
import { SwiperGallery } from '@/widgets/SwiperGallery';
import type { Swiper as SwiperType } from 'swiper';
import { data } from '../model/data';
import clsx from 'clsx';

export const SectionGallery = () => {
  const [view, setView] = useState<'outside' | 'inside'>('outside');
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <Section className={style.section} classNameContent={style.section_inner}>
      <div className={style.top}>
        <Title className={style.title}>Галерея проекта</Title>
        <div className={style.buttons}>
          <button
            onClick={() => setView('outside')}
            className={clsx(
              style.button,
              view === 'outside' && style.button_active
            )}
          >
            Фото дома
          </button>
          <button
            onClick={() => setView('inside')}
            className={clsx(
              style.button,
              view === 'inside' && style.button_active
            )}
          >
            Планировка
          </button>
        </div>
        <div className={style.buttons}>
          <button className={style.swiper_button_prev} onClick={handleNext} />
          <button className={style.swiper_button_next} onClick={handlePrev} />
        </div>
      </div>
      <SwiperGallery views={view} data={data} swiperRef={swiperRef} />
    </Section>
  );
};
