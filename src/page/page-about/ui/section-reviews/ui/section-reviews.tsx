'use client';
import style from './section-reviews.module.scss';
import { Section } from '@/shared/ui';
import Image from 'next/image';
import star from './assets/star.svg';
import arrow from './assets/arrow.svg';
import { reviews } from '../model/data';
import { useState } from 'react';

export const SectionReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // TODO Эту переменную можно убрать и сразу использовать в map и туда сразу прокидывать нужный индекс
  const currentReview = reviews[currentIndex];

  const nextReview = () => {
    // TODO здесь сделать логику, если это последний слайдер то при клике скидывать на первый чтобы был бесконечный цикл
    if (currentIndex !== reviews.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const previousReview = () => {
    // TODO тут тоже самое
    if (currentIndex !== 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  return (
    <Section>
      <div className={style.top_part}>
        {/* TODO тут надо использовать компонент Title и добавить класс и поправить стили если надо */}
        <p className={style.text_left_part}>Отзывы наших клиентов</p>
        {/* TODO тут изменить на компонент P и также добавить класс и изменить стили */}
        <span className={style.text_right_part}>
          Реальные отзывы о нашей компании вы можете посмотреть на независимых
          сайтах
        </span>
        <button className={style.button}>
          {/* TODO span можно убрать и назначить стили через класс button */}
          <span className={style.text_1}>Подобрать проект для себя </span>
        </button>
      </div>
      <div className={style.main_card_section}>
        <div className={style.card_section}>
          <div className={style.container}>
            <div className={style.star}>
              {[...Array(currentReview.rating)].map((el, index) => (
                <Image
                  key={index}
                  src={star}
                  alt={'Rate'}
                  className={style.star}
                />
              ))}
            </div>
            <Image
              className={style.avatar}
              alt={'Avatarka'}
              src={currentReview.avatar}
            />
          </div>
          <div className={style.info_text}>
            <div className={style.name_date}>
              <span className={style.name}>{currentReview.username}</span>
              <span className={style.date}>{currentReview.date}</span>
            </div>
            <p className={style.text_review}>{currentReview.review}</p>
          </div>
          <button className={style.button_text}>Читать далее .....</button>
          {/* TODO слишком много точек достаточно поставить ... */}
          <div className={style.info_photo}>
            <Image
              className={style.photo}
              src={currentReview.photo}
              alt={'Photo reviews'}
            />
          </div>
        </div>
      </div>
      <div className={style.bottom}>
        <div className={style.counter}>
          <span className={style.number}>{currentIndex + 1}</span>
          {/* TODO тут можно сделать буквой разделитель, но думаю лучше будет сделать бордером или bg-color и шириной блока и высотой */}
          {/* В данной ситуации ок */}
          <span className={style.line}>|</span>
          <span className={style.all}>{reviews.length}</span>
        </div>
        <div className={style.arrows}>
          <Image
            onClick={currentIndex !== 0 ? previousReview : undefined}
            src={arrow}
            alt={'arrow'}
            className={style.arrow_left}
          />
          <Image
            onClick={
              currentIndex !== reviews.length - 1 ? nextReview : undefined
            }
            src={arrow}
            alt={'arrow'}
            className={style.arrow_right}
          />
        </div>
      </div>
    </Section>
  );
};
