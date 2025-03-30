import style from './Slide.module.scss';

export const Slide = () => (
  <div className={style.slide}>
    <div className={style.grayBlock}>
      <div className={style.title}>Дома из бревна</div>
      <div className={style.line} />
      <div className={style.number}>01</div>
    </div>
  </div>
);
