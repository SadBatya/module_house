import style from './ListItem.module.scss';
import Image from 'next/image';
import checkPng from './assets/check.svg';
import { P } from '../P/P';

interface Props {
  title: string;
  subtext: string;
}

export const ListItem = ({ title, subtext }: Props) => (
  <li className={style.list_item}>
    <Image src={checkPng} className={style.icon} alt="checkbox" />
    <div className={style.text}>
      <h6 className={style.title}>{title}</h6>
      <P className={style.description}>{subtext}</P>
    </div>
  </li>
);
