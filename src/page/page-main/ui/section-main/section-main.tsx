import style from './section-main.module.scss';
import { Button } from '@/shared/ui/Button/Button';
import { Carousel } from '@/widgets/Carousel';

export const SectionMain = () => (
  <section className={style.main}>
    <div className={style.left_section}>
      <h1 className={style.title}>
        Строим жизнь без лишних метров — только то, что действительно ваше
      </h1>
      <ul className={style.list}>
        <li className={style.list_inner}>
          От эскиза до ключей — быстрее, чем вы прочитаете &quot;Войну и
          мир&quot;
        </li>
        <li className={style.list_inner}>
          Фиксированная стоимость, цена от 35000 р/кв.м.
        </li>
        <li className={style.list_inner}>
          Подтверждение от банка за 1,5 часа. Работаем с материнским капиталом.
        </li>
      </ul>
      <Button className={style.button}>Выбрать дом</Button>
    </div>
    <Carousel />
  </section>
);
