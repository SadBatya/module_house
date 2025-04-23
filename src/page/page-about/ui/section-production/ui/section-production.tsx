import Image from 'next/image';
import style from './section-production.module.scss';
import { cardData } from '@/page/page-about/ui/section-production/model/data';
import { Section, Title } from '@/shared/ui';

export const SectionProduction = () => (
  <Section>
    <Title uppercase className={style.title}>
      Наше <span className={style.color}>производство</span>
    </Title>
    <div className={style.container}>
      {cardData.map(({ title, img }, index) => (
        <div key={index} className={style.imgContainer}>
          <Image
            src={img}
            alt={title}
            width={560}
            height={520}
            className={style.img}
          />
          <p className={style.title}>
            {index + 1}.{title}
          </p>
        </div>
      ))}
    </div>
  </Section>
);
