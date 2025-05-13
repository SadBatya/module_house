'use client';

import { Input } from '@/shared/ui/Input/Input';
import style from './Form.module.scss';
import { Button } from '@/shared/ui';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';

interface IFormValues {
  name: string;
  phone: number;
  telegram: string;
}

export const Form = ({ className }: { className?: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>();

  const onSubmit = (data: IFormValues) => {
    alert(data.name);
    alert(data.phone);
    alert(data.telegram);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={clsx(style.form, className)}
    >
      <Input
        error={errors.name?.message}
        {...register('name', {
          required: 'Введите имя',
          minLength: {
            value: 3,
            message: 'Имя должно содержать минимум 3 символа',
          },
        })}
        placeholder={'Имя'}
        labelText={'Ваше имя'}
      />
      <Input
        error={errors.phone?.message}
        {...register('phone', {
          required: 'Введите телефон',
          pattern: {
            value: /^[0-9]{11}$/,
            message: 'Введите правильный номер телефона',
          },
        })}
        type="number"
        placeholder={'Телефон'}
        labelText={'Телефон'}
      />
      <Input
        error={errors.telegram?.message}
        {...register('telegram', {
          required: 'Введите Telegram',
          pattern: {
            value: /^@?([A-Za-z0-9_]{5,30})$/,
            message: 'Введите правильный Telegram',
          },
        })}
        placeholder={'Telegram'}
        labelText={'Ваш Telegram'}
      />
      <Button type="submit" className={style.button}>
        Отправить заявку
      </Button>
      <span className={style.subtext}>
        Указывая свои данные вы даёте согласие на обработку персональных данных,
        в соответствии с политикой конфиденциальности
      </span>
    </form>
  );
};
