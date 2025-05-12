import style from './section-reviews.module.scss';
import { Section } from '@/shared/ui';

export const SectionReviews = () => (
  <Section>
    <div className={style.top_part}>
      <p className={style.text_left_part}>Отзывы наших клиентов</p>
      <span className={style.text_right_part}>
        Реальные отзывы о нашей компании вы можете посмотреть на независимых
        сайтах
      </span>
      <button className={style.button}>
        <span className={style.text_1}>Подобрать проект для себя </span>
        <span className={style.text_2}>(5 вопросов)</span>
      </button>
    </div>
  </Section>
);
