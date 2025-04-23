import { ImgWithText } from '@/widgets/ImgWithText/ImgWithText';
import { Section } from '@/shared/ui';
import phonePng from './assets/phone.png';

export const SectionControl = () => (
  <Section>
    <ImgWithText
      img={phonePng}
      title="Все под контролем"
      description="Ежедневно вы будете получать фотоотчет о выполненной работе. 
Для принятия работы вам не нужно разбираться в строительных деталях – каждому клиенту предоставляется подробный чек-лист, который поможет самостоятельно оценить качество выполненных работ."
    />
  </Section>
);
