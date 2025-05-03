import style from './Button.module.scss';
import clsx from 'clsx';

interface Props {
  children: string;
  transparent?: boolean;
  className?: string;
}

export const Button = ({ children, transparent, className }: Props) => {
  const styleObj: React.CSSProperties = {};

  return (
    <button
      style={styleObj}
      className={clsx(
        style.button,
        transparent && style.transparent,
        className
      )}
    >
      {children}
    </button>
  );
};
