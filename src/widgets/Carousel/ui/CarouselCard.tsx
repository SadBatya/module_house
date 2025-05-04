import { StaticImageData } from 'next/image';
import style from './CarouselCard.module.scss';

interface Props {
  description: string;
  title: string;
  bgImage?: StaticImageData;
}

export const CarouselCard = ({ description, title, bgImage }: Props) => (
  <div
    className={style.card}
    style={{
      backgroundImage: `url(${bgImage?.src})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
    <p className={style.description}>{description}</p>
    <h3 className={style.title}>{title}</h3>
  </div>
);
