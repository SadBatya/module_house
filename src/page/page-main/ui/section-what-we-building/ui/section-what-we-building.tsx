import { Accordion } from '@/widgets/Accordion';
import { Title } from '@/shared/ui';
import { Section } from '@/shared/ui';
import style from './section-what-we-building.module.scss';

export const SectionWhatWeBuilding = () => (
  <Section className={style.section}>
    <Title>Что мы строим?</Title>
    <Accordion />
  </Section>
);
