import style from './Button.module.scss';
import clsx from 'clsx';

interface Props {
  children: string;
  transparent?: boolean;
  className?: string;
  type?: 'submit' | 'reset' | 'button';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  children,
  transparent,
  className,
  type = 'button',
  disabled,
  onClick,
}: Props) => {
  const styleObj: React.CSSProperties = {};

  return (
    <button
      onClick={onClick}
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
