import Image from 'next/image';
import style from './Slide.module.scss';
import clsx from 'clsx';

export interface Props {
  num: number;
  text: string;
  description: string;
  img: string;
  activeIndex: number;
  onClick: () => void;
}

export const Slide = ({
  num,
  text,
  activeIndex,
  onClick,
  description,
}: Props) => {
  return (
    <div className={style.slide} onClick={onClick}>
      <div className={style.grayBlock}>
        <div className={style.title}>{text}</div>
        <div className={style.line} />
        <div className={style.number}>0{num}</div>
      </div>
      <div
        className={clsx(style.inner, {
          [style.active]: activeIndex === num,
          [style.notactive]: activeIndex !== num,
        })}
      >
        <Image
          className={style.img}
          src="/images/main/house.jpg"
          width={772}
          height={493}
          alt={text}
        />
        <div className={style.info}>
          <div className={style.description}>{description}</div>
          <div
            className={clsx(style.title, {
              [style.active]: activeIndex === num,
              [style.notactive]: activeIndex !== num,
            })}
          >
            <div className={style.number}>0{num}</div>
            <div className={style.line} />
            <div className={style.title}>{text}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
