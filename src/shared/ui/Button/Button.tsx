import style from './Button.module.scss';
import clsx from 'clsx';

interface Props {
  children: string;
  transparent?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
}

export const Button = ({
  children,
  transparent,
  className,
  type = 'button',
  disabled,
}: Props) => {
  const styleObj: React.CSSProperties = {};

  return (
    <button
      type={type}
      style={styleObj}
      disabled={disabled}
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
