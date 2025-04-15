import clsx from 'clsx';
import style from './P.style.module.scss';
import { type ReactNode } from 'react';

export const P = ({
  children,
  className,
  center,
}: {
  children: string | ReactNode;
  className?: string | string[];
  center?: boolean;
}) => (
  <p className={clsx(style.description, className, center && style.center)}>
    {children}
  </p>
);
