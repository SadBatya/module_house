import style from './Title.module.scss';

export const Title = ({ children }: { children: string }) => {
  return <h2 className={style.title}>{children}</h2>;
};
