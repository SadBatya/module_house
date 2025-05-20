import Image from 'next/image';
import style from './section-company.module.scss';
import man from './assets/man.svg';
import { Title } from '@/shared/ui';
import { Section } from '@/shared/ui';
import { Span } from '@/shared/ui/Span/Span';
export const SectionCompany = () => (
  <Section className={style.section}>
    <div className={style.sectionLeft}>
      <Title uppercase>
        Компания <br />
        <Span>«МЫ ДОМА»</Span>
      </Title>

      <h3 className={style.description}>
        Ответственный подход к каждому клиенту
      </h3>
      <div className={style.text_container}>
        <span className={style.text_container_text}>
          Здравствуйте, дамы и господа! <br /> Добро пожаловать в Мыдома! <br />
          Прежде всего я хотел бы поблагодарить Вас за интерес к нашей компании.
          Позволю себе в нескольких словах охарактеризовать деятельность,
          которой мы занимаемся на протяжении многих лет. <br />
          Мы строим дачные дома и коттеджи. В своей деятельности мы учитываем
          пожелания и возможности заказчика. Все готовые архитектурные решения,
          которые представлены на сайте, адаптированы под условия российского
          климата. Любой понравившийся вам проект можно дополнить и изменить —
          добавить мансарду или второй этаж, изменить планировку, комплектацию
          или архитектурный стиль Мы делаем всё для того, чтобы претворить вашу
          идею в жизнь. МЫ - СТРОИМ!
        </span>
      </div>
    </div>
    <Image src={man} alt="Business man" className={style.picture} />
  </Section>
);
