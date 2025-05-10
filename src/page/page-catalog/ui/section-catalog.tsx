import { Section, Title, P, CatalogCard } from '@/shared/ui';
import { catalogData } from '../model/data';
import style from './section-catalog.module.scss';

export const SectionCatalog = () => (
  <>
    {catalogData.map(({ title, description, cards }, index) => (
      <Section className={style.section} key={index}>
        <Title>{title}</Title>
        <P className={style.description}>{description}</P>
        <div className={style.cards}>
          {cards.map((card, index) => (
            <CatalogCard {...card} key={index} />
          ))}
        </div>
      </Section>
    ))}
  </>
);
