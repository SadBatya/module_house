import style from './Input.module.scss';

export const Input = ({ labelText, placeholder, type }) => (
  <>
    <label htmlFor="" className={style.label}></label>
    <input className={style.input} type="text" placeholder="Имя" />
  </>
);
