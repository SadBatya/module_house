import { ReactNode } from 'react';
import style from './Title.module.scss';
import clsx from 'clsx';

interface Props {
  children: string | ReactNode;
  center?: boolean;
}

export const Title = ({ children, center }: Props) => {
  return (
    <h2 className={clsx(style.title, center && style.center)}>{children}</h2>
  );
};
