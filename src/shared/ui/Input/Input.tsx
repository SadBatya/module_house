import style from './Input.module.scss';

interface Props {
  labelText: string;
  placeholder: string;
  type: string;
}

export const Input = (
  {
    // labelText,
    //  placeholder,
    // type
  }: Props
) => (
  <>
    <label htmlFor="" className={style.label}></label>
    <input className={style.input} type="text" placeholder="Имя" />
  </>
);
