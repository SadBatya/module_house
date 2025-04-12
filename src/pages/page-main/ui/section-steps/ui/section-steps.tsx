import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import style from './section.module.scss';

import { listData } from '../model/data';
import { ListItem } from '@/shared/ui/ListItem/ListItem';

export const SectionSteps = () => (
  <Section>
    <div className={style.container_text}>
      <Title>Этапы возведения вашего будущего дома</Title>
      <ul className={style.list}>
        {listData.map(({ title, subtext }, index) => (
          <ListItem title={title} subtext={subtext} key={index} />
        ))}
      </ul>
    </div>
  </Section>
);
