import { Title } from '@/shared/ui';
import Image, { StaticImageData } from 'next/image';
import style from './ImgWithText.module.scss';
import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string | ReactNode;
  img: StaticImageData;
}

export const ImgWithText = ({ title, description, img }: Props) => (
  <div className={style.inner}>
    <Image className={style.img} src={img} alt="men" />
    <div className={style.info}>
      <Title uppercase>{title}</Title>
      <p className={style.description}>{description}</p>
    </div>
  </div>
);
