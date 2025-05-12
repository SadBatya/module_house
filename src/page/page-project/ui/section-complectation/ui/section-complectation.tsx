import { Section, Title, P } from '@/shared/ui';
import style from './section-complectation.module.scss';

export const SectionComplectation = () => (
  <Section>
    <Title>Описание</Title>
    <P className={style.description}>
      Публикуем фото A-Frame. Мы его построили для заказчика еще в прошлом году,
      и в данный момент дом используется под сдачу в аренду. Размеры по
      основанию 6х9 метров, общая площадь 54 м².
    </P>
  </Section>
);
