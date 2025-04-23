import Image from 'next/image';
import style from './section-production.module.scss';
import  { productData } from './assets/data';
import { Section, Title } from '@/shared/ui';

export const SectionProduction = () => (
  <Section>
    <Title uppercase className={style.title}>
      НАше <span className={style.color}>ПРОИЗВОДСТВО</span>
    </Title>
    <div className={style.container}>
      {productData.map((item, index) => (

        <div key={index} className={style.imgContainer}>
            <Image
              src={`/images/about/${item.img}`}
              alt={item.description}
              width={560}
              height={520}
              className={style.img}
            />
            <p className={style.description}>{item.description}</p>
        </div>
      ))}
    </div>

    </Section>
);
