import style from './Button.module.scss';
import clsx from 'clsx';

interface Props {
  px?: string;
  py?: string;
  fz?: string;
  fw?: string;
  children: string;
  transparent?: boolean;
}

export const Button = ({ children, px, py, fz, fw, transparent }: Props) => (
  <button
    className={clsx(style.button, transparent && style.transparent)}
    style={{
      padding: `${py}rem ${px}rem`,
      fontSize: `${fz}rem`,
      fontWeight: `${fw}`,
    }}
  >
    {children}
  </button>
);
