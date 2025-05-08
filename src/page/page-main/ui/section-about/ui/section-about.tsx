import { Section } from '@/shared/ui';
import aboutPng from './assets/about.jpg';
import { ImgWithText } from '@/widgets/ImgWithText/ImgWithText';
import style from './section-about.module.scss';

export const SectionAbout = () => (
  <Section>
    <ImgWithText
      img={aboutPng}
      title={'Мы дома'}
      description={
        <>
          Мы создаем места, куда хочется возвращаться.
          <br /> <br />
          «Когда-то мы искали «идеальный дом» и поняли: его не существует!{' '}
          <br /> Зато есть идеальные люди — те, кто умеет строить из кирпича
          так, чтобы стены «пели», из дерева — чтобы пахло детством, из
          газобетона — чтобы было тепло, как в руках мамы. <br />
          Мы собрали таких мастеров. Теперь они работают для вас.
          <br />
          <br />
          <span className={style.description}>Основатель Денис Мозговой</span>
        </>
      }
    />
  </Section>
);
