import { Ref } from 'react';
import style from './Input.module.scss';
import { Error } from '@/shared/ui';

interface Props {
  labelText: string;
  placeholder: string;
  type?: 'text' | 'email' | 'number';
  ref?: Ref<HTMLInputElement> | undefined;
  error?: string | undefined;
}

export const Input = ({
  labelText,
  placeholder,
  type = 'text',
  ref,
  error,
  ...rest
}: Props) => (
  <div className={style.input_container}>
    <label htmlFor="" className={style.label}>
      {labelText}
    </label>
    <input
      ref={ref}
      className={style.input}
      inputMode={type === 'number' ? 'numeric' : 'text'}
      type={type}
      placeholder={placeholder}
      {...rest}
    />
    <Error>{error}</Error>
  </div>
);
