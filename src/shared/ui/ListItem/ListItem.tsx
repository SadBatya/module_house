import style from './ListItem.module.scss';
import Image from 'next/image';
import checkPng from './assets/check.svg';
import { P } from '../P/P';
import clsx from 'clsx';

interface Props {
  title: string;
  subtext: string;
  index: number;
  activeIndex: number;
}

export const ListItem = ({ title, subtext, index, activeIndex }: Props) => (
  <li className={clsx(style.list_item)}>
    <Image src={checkPng} className={style.icon} alt="checkbox" />
    <div className={clsx(style.text, index === activeIndex && style.text_open)}>
      <h6 className={style.title}>{title}</h6>
      <P className={style.description}>{subtext}</P>
    </div>
  </li>
);
