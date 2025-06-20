import { TwoSliderHorizontal } from '@/widgets/TwoSliderHorizontal/ui/TwoSliderHorizontal';
import { Title } from '@/shared/ui';
import { Section } from '@/shared/ui';
import { P } from '@/shared/ui';
import style from './section-our-project.module.scss';

export const SectionOurProject = () => (
  <>
    <Section className={style.section}>
      <Title center uppercase>
        Наши построенные дома
      </Title>
      <P center className={style.description}>
        За 15 лет работы мы построили более 2000 домов <br /> Вот некоторые из
        них:
      </P>
    </Section>
    <TwoSliderHorizontal />
  </>
);
