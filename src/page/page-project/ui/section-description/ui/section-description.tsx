import { Section, Title } from '@/shared/ui';
import style from './section-description.module.scss';
import { data } from '../model/data';

export const SectionDescription = () => (
  <Section>
    <div className={style.second_section}>
      <Title>Комплектация</Title>
      <ul className={style.list}>
        {data.map((str, index) => (
          <li key={index} className={style.list_item}>
            <span className={style.list_number}>{index + 1}</span>
            {str}
          </li>
        ))}
      </ul>
    </div>
  </Section>
);
