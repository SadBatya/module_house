import style from './Error.module.scss';

export const Error = ({ children }: { children: string | undefined }) => (
  <span className={style.error}>{children}</span>
);
