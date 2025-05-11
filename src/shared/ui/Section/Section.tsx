import { ReactNode } from 'react';
import style from './Section.module.scss';
import clsx from 'clsx';

export const Section = ({
  children,
  className,
  classNameContent,
}: {
  children: ReactNode;
  className?: string;
  classNameContent?: string;
}) => {
  if (classNameContent) {
    return (
      <section className={clsx(style.section, className)}>
        <div className={classNameContent}>{children}</div>
      </section>
    );
  }
  return (
    <section className={clsx(style.section, className)}>{children}</section>
  );
};
