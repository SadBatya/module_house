import style from './ReviewCard.module.scss';
import Image, { type StaticImageData } from 'next/image';
import house from './assets/house.png';
import starIcon from './assets/star.svg';

interface Props {
  rating: number;
  date: string;
  username: string;
  review: string;
  avatar: StaticImageData;
}

export const ReviewCard = ({
  rating,
  date,
  username,
  review,
  avatar,
}: Props) => (
  <div className={style.card}>
    <div className={style.card_info}>
      <div className={style.rating}>
        {new Array(rating).fill(null).map((_, index) => (
          <Image src={starIcon} alt="" key={index} />
        ))}
      </div>
      <div className={style.name_date}>
        <span className={style.name}>{username}</span>
        <span className={style.date}>{date}</span>
      </div>
      <p className={style.description}>{review}</p>
      <button className={style.button}>Читать далее...</button>
      <Image className={style.avatar} src={avatar} alt="" />
    </div>
    <Image className={style.img} src={house} alt="" />
  </div>
);
