import clsx from 'clsx';
import style from './P.style.module.scss';

export const P = ({
  children,
  className,
}: {
  children: string;
  className?: string | string[];
}) => <p className={clsx(style.description, className)}>{children}</p>;
