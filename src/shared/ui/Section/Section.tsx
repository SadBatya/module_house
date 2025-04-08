import { ReactNode } from 'react';
import style from './Section.module.scss';

export const Section = ({ children }: { children: ReactNode }) => (
  <section className={style.section}>{children}</section>
);
