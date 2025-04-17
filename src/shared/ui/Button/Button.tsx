import style from './Button.module.scss';
import clsx from 'clsx';

interface Props {
  px?: string;
  py?: string;
  fz?: string;
  fw?: string;
  wf?: boolean;
  children: string;
  transparent?: boolean;
  className?: string;
}

export const Button = ({
  children,
  px,
  py,
  fz,
  fw,
  transparent,
  wf,
  className,
}: Props) => {
  const styleObj: React.CSSProperties = {};

  if (px || py) {
    styleObj.padding = `${py ?? 0}rem ${px ?? 0}rem`;
  }

  if (fz) {
    styleObj.fontSize = `${fz}rem`;
  }

  if (fw) {
    styleObj.fontWeight = fw;
  }

  return (
    <button
      className={clsx(
        style.button,
        transparent && style.transparent,
        wf && style.width_full,
        className
      )}
      style={styleObj}
    >
      {children}
    </button>
  );
};
