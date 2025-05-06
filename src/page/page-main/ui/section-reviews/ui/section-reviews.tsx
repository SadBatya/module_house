import { Section, Title, P, Button } from '@/shared/ui';
import style from './section-reviews.module.scss';
// import { reviews } from '../model/data';
import { ReviewCard } from '@/widgets/ReviewCard';

export const SectionReviews = () => (
  <Section>
    <div className={style.top}>
      <Title className={style.title}>Отзывы наших клиентов</Title>

      <P>
        Реальные отзывы о нашей компании вы можете посмотреть на независимых
        сайтах
      </P>
      <Button className={style.button}>Подобрать проект для себя</Button>
    </div>
    <ReviewCard />
    <div className={style.navigation}>
      <div className={style.slide_numbers}>01 / 11</div>
      <div className={style.swiper_buttons}>
        <button className={style.prev_button} />
        <button className={style.prev_next} />
      </div>
    </div>
  </Section>
);
