'use client';

import { useState } from 'react';
import Image from 'next/image';
import style from './Slide.module.scss';
import { Props } from './model/types';
import clsx from 'clsx';

export const Slide = ({ num, text }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={style.slide}>
      <div className={style.grayBlock} onClick={() => setOpen(!open)}>
        <div className={style.title}>Дома из бревна</div>
        <div className={style.line} />
        <div className={style.number}>0{num}</div>
      </div>
      <div
        className={clsx(style.inner, {
          [style.active]: open,
          [style.notactive]: !open,
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
          <div className={style.description}>
            Роскошный панорамный вид, тепло и энергоэффективность
          </div>
          <div className={style.title}>
            <div className={style.number}>0{num}</div>
            <div className={style.line} />
            <div className={style.title}>Дома из бревна</div>
          </div>
        </div>
      </div>
    </div>
  );
};
