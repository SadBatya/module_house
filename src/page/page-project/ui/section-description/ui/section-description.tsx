import { Section, Title, P } from '@/shared/ui';
import style from './section-description.module.scss';
import { data } from '../model/data';

export const SectionDescription = () => (
  <Section>
    <div className={style.first_section}>
      <Title>Описание</Title>
      <P className={style.description}>
        Публикуем фото A-Frame. Мы его построили для заказчика еще в прошлом
        году, и в данный момент дом используется под сдачу в аренду. Размеры по
        основанию 6х9 метров, общая площадь 54 м².
      </P>
    </div>
    <div className={style.second_section}>
      <Title>Комплектация</Title>
      <ul className={style.list}>
        {data.map((str, index) => (
          <li key={index} className={style.list_item}>
            <span className={style.list_number}>{index + 1}</span>
            {str}
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
