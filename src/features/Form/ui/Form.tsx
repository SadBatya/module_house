import { Input } from '@/shared/ui/Input/Input';
import style from './Form.module.scss';

export const Form = () => (
  <form className={style.form}>
    <Input placeholder={''} labelText={''} type={'submit'} />
  </form>
);
