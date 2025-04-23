import { ReactNode } from 'react';
import style from './Title.module.scss';
import clsx from 'clsx';

interface Props {
  children: string | ReactNode;
  center?: boolean;
  uppercase?: boolean;
  className?: string;
}

export const Title = ({ children, center, uppercase, className }: Props) => {
  return (
    <h2
      className={clsx(
        style.title,
        center && style.center,
        uppercase && style.uppercase,
        className
      )}
    >
      {children}
    </h2>
  );
};
