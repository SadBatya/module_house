import style from './ReviewCard.module.scss';
import Image from 'next/image';
import avatar from './assets/avatar.png';
import house from './assets/house.png';

export const ReviewCard = () => (
  <div className={style.card}>
    <div className={style.card_info}>
      <div className={style.rating}></div>
      <div className={style.name_date}>
        <span className={style.name}>Алина Баталова</span>
        <span className={style.date}>11.03.2021</span>
      </div>
      <p className={style.description}>
        Я искал компанию, которая мне быстро построит дом. Я точно знал, что не
        хочу кирпичные, монолитные дома, т.к. это долго и дорого. Выбрал
        несколько компаний, ездил на встречи. Остановился на Мыдома
      </p>
      <button className={style.button}>Читать далее...</button>
      <Image src={avatar} alt="" />
    </div>
    <Image src={house} alt="" />
  </div>
);
