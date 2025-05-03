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
          Ежедневно вы будете получать фотоотчет о выполненной работе. <br />{' '}
          <br /> Для принятия работы вам не нужно разбираться в строительных
          деталях – каждому клиенту предоставляется подробный чек-лист, который
          поможет самостоятельно оценить качество выполненных работ.
        </>
      }
    />
  </Section>
);
