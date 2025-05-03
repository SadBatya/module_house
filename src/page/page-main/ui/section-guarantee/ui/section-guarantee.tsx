import { Title } from '@/shared/ui';
import { Section } from '@/shared/ui';
import style from './section-guarantee.module.scss';
import Image from 'next/image';
import { cardInfo } from '../model/data';

import { Button } from '@/shared/ui';

export const SectionGuarantee = () => (
  <Section>
    <Title center>
      Три гарантии, которые вы получите <br /> в договоре строительства
    </Title>
    <div className={style.cards}>
      {cardInfo.map(({ icon, description }, index) => (
        <div className={style.card} key={index}>
          <Image className={style.icon} src={icon} alt="icon" />
          <p className={style.description}>{description}</p>
        </div>
      ))}
    </div>
    <div className={style.check}>
      <p className={style.description}>
        Во время строительства дома вам будет предоставлен чек-лист, с помощью
        которого вы сможете самостоятельно проверить качество работ на всех
        этапах, от фундамента до кровли, даже без специальных строительных
        знаний.
      </p>
      <Button className={style.button}>Подобрать проект</Button>
    </div>
  </Section>
);
