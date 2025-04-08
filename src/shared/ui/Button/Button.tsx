import style from './Button.module.scss';
import clsx from 'clsx';

interface Props {
  px?: string;
  py?: string;
  children: string;
}

export const Button = ({ children, px, py }: Props) => (
  <button
    className={clsx(style.button)}
    style={{
      padding: `${py}rem ${px}rem`,
    }}
  >
    {children}
  </button>
);
