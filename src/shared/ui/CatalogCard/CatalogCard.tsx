import Image, { type StaticImageData } from 'next/image';
import style from './CatalogCard.module.scss';
import Link from 'next/link';

interface Props {
  image: StaticImageData;
  model: string;
  size: string;
  price: string;
}

export const CatalogCard = ({ image, model, size, price }: Props) => (
  <Link href={'/project'} className={style.card}>
    <Image className={style.img} src={image} alt="" />
    <div className={style.info}>
      <div className={style.info_inner}>
        <span className={style.model}>{model}</span>
        <span className={style.size}>{size}</span>
      </div>
      <div className={style.divider} />
      <div className={style.price}>{price}</div>
    </div>
  </Link>
);
