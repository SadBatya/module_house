import { Title } from '@/shared/ui';
import Image, { StaticImageData } from 'next/image';
import style from './ImgWithText.module.scss';
import { ReactNode } from 'react';
import clsx from 'clsx';

interface Props {
  title: string;
  description: string | ReactNode;
  img: StaticImageData;
  className?: string;
  titleUppercase?: boolean;
}

export const ImgWithText = ({
  title,
  description,
  img,
  className,
  titleUppercase = true,
}: Props) => (
  <div className={clsx(style.inner, className)}>
    <Image className={style.img} src={img} alt="men" />
    <div className={style.info}>
      <Title uppercase={titleUppercase}>{title}</Title>
      <p className={style.description}>{description}</p>
    </div>
  </div>
);
