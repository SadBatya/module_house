import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import Image, { StaticImageData } from 'next/image';
import style from './section-about.module.scss';

interface Props {
  title: string;
  description: string;
  img: StaticImageData;
}

export const ImgWithText = ({ title, description, img }: Props) => (
  <Section>
    <div className={style.inner}>
      <Image className={style.img} src={img} alt="men" />
      <div className={style.info}>
        <Title>{title}</Title>
        <p className={style.description}>{description}</p>
      </div>
    </div>
  </Section>
);
