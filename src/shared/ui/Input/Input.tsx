import style from './Input.module.scss';

interface Props {
  labelText: string;
  placeholder: string;
  type?: string;
}

export const Input = ({ labelText, placeholder, type = 'text' }: Props) => (
  <div className={style.input_container}>
    <label htmlFor="" className={style.label}>
      {labelText}
    </label>
    <input className={style.input} type={type} placeholder={placeholder} />
  </div>
);
