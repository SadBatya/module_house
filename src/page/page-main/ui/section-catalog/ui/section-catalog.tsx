import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import { SwiperCatalog } from '@/widgets/SwiperCatalog';
import { Button } from '@/shared/ui';
import style from './section-catalog.module.scss';

export const SectionCatalog = () => (
  <Section>
    <Title>Каталог проектов</Title>
    <SwiperCatalog />
    <div className={style.subsection}>
      <Button fz="1.6" py="1.7" px="4.3" fw="400" transparent>
        Показать все
      </Button>
      <p className={style.text}>Заказать разработку индивидуального проекта</p>
    </div>
  </Section>
);
