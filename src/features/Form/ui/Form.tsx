import { Input } from '@/shared/ui/Input/Input';
import style from './Form.module.scss';
import { Button } from '@/shared/ui';

export const Form = () => (
  <form className={style.form}>
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
