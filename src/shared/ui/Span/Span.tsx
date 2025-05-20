import clsx from 'clsx';
import style from './Span.style.module.scss';
import { type ReactNode } from 'react';

export const Span = ({
  children,
  className,
}: {
  children: string | ReactNode;
  className?: string | string[];
}) => (
  <span className={clsx(style.description, className, style.center)}>
    {children}
  </span>
);
