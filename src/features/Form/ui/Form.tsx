import { Input } from '@/shared/ui/Input/Input';
import style from './Form.module.scss';
import { Button } from '@/shared/ui';
import clsx from 'clsx';

export const Form = ({ className }: { className?: string }) => (
  <form className={clsx(style.form, className)}>
    <Input placeholder={'Имя'} labelText={'Ваше имя'} />
    <Input placeholder={'Телефон'} labelText={'Телефон'} />
    <Input placeholder={'Telegram'} labelText={'Ваш Telegram'} />
    <Button className={style.button}>Отправить заявку</Button>
    <span className={style.subtext}>
      Указывая свои данные вы даёте согласие на обработку персональных данных, в
      соответствии с политикой конфиденциальности
    </span>
  </form>
);
