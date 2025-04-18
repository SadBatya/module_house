import Image from 'next/image';
import React from 'react';
import style from './sectionCompany.module.css';
import man from './assets/man.svg';

export const SectionCompany = () => {
  return (
    <div className={style.container}>
      <div className={style.sectionLeft}>
        <h1 className={style.black_text_company}>КОМПАНИЯ</h1>
        <h1 className={style.color_text_company}>«МЫДОМА»</h1>
        <h3 className={style.h3}>Ответственный подход к каждому клиенту</h3>
        <div className={style.text_container}>
          <span className={style.text_container_text}>Здравствуйте, дамы и господа! <br /> Добро пожаловать в Мыдома! <br />
Прежде всего я хотел бы поблагодарить Вас за интерес к нашей компании. Позволю себе в нескольких словах охарактеризовать деятельность, которой мы занимаемся на протяжении многих лет. <br />
Мы строим дачные дома и коттеджи. В своей деятельности мы учитываем пожелания и возможности заказчика. Все готовые архитектурные решения, которые представлены на сайте, адаптированы под условия российского климата. Любой понравившийся вам проект можно дополнить и изменить — добавить мансарду или второй этаж, изменить планировку, комплектацию или архитектурный стиль
Мы делаем всё для того, чтобы претворить вашу идею в жизнь. МЫ - СТРОИМ!sdasdasd</span>
        </div>
      </div>
      <Image
        src={man}
        alt="Business man"
        className={style.picture}
      />
    </div>
  );
};

