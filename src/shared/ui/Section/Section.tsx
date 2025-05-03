import { ReactNode } from 'react';
import style from './Section.module.scss';
import clsx from 'clsx';

export const Section = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => <section className={clsx(className, style.section)}>{children}</section>;
