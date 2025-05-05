import motivationData from '../model/data';
import style from './section-motivation.module.scss';
import { Section, Title } from '@/shared/ui';

export const SectionMotivation = () => (
  <Section>
    <Title uppercase className={style.title}>
      <div className={style.text}>
        <span className={style.color}>Почему </span>
        <span className={style.black}>заказать проект и</span>
      </div>
      <span className={style.color}>строительство </span>
      <span className={style.black}>лучше у нас? </span>
    </Title>
    <div className={style.container}>
      {motivationData.map((text, index) => (
        <div key={index} className={style.text}>
          {text}
        </div>
      ))}
    </div>
  </Section>
);
