import style from './section-main.module.scss';
import { Button } from '@/shared/ui/Button/Button';

export const SectionMain = () => (
  <section className={style.main}>
    <div className={style.left_section}>
      <h1 className={style.title}>
        Строим современные, теплые и эстетичные дома для людей и для жизни
      </h1>
      <ul className={style.list}>
        <li className={style.list_inner}>
          Построено более 1000 домов за 15 лет работы{' '}
        </li>
        <li className={style.list_inner}>
          Фиксированная стоимость, цена от 35000 р/кв.м.
        </li>
        <li className={style.list_inner}>
          Подтверждение от банка за 1,5 часа. Работаем с материнским капиталом.
        </li>
      </ul>
      <Button>Выбрать дом</Button>
    </div>
  </section>
);
