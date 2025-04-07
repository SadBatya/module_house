import style from './Button.module.scss';

export const Button = ({ children }: { children: string }) => (
  <button className={style.button}>{children}</button>
);
