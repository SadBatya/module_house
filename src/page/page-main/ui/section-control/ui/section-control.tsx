import { ImgWithText } from '@/widgets/ImgWithText/ImgWithText';
import { Section } from '@/shared/ui';
import phonePng from './assets/phone.png';
import style from './section-control.module.scss';

export const SectionControl = () => (
  <Section>
    <ImgWithText
      titleUppercase={false}
      className={style.inner}
      img={phonePng}
      title="Все под контролем"
      description={
        <>
          Показываем как введется строительство фотоотчетами слайд шоу из
          креативных фоток на стройке
        </>
      }
    />
  </Section>
);
