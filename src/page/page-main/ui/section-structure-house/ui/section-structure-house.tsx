'use client';

import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import style from './section-structure-house.module.scss';
import housePng from './assets/house.png';
import Image from 'next/image';
import clsx from 'clsx';
import { useState } from 'react';
import { navigation, description } from '../model/data';

export const SectionStructureHouse = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  return (
    <Section>
      <Title>Все продумано до мелочей</Title>
      <nav className={style.nav}>
        <ul className={style.nav_list}>
          {navigation.map((title, index) => (
            <li
              className={clsx(
                style.nav_btn,
                activeCategory === index && style.nav_btn_active
              )}
              key={index}
              onClick={() => setActiveCategory(index)}
            >
              {title}
            </li>
          ))}
        </ul>
      </nav>
      <p className={style.description}>{description[activeCategory]}</p>
      <div className={style.house_container}>
        <Image className={style.house_img} src={housePng} alt="house" />
        <div
          className={clsx(
            style.block,
            activeCategory === 0 && style.block_active
          )}
        >
          <div className={style.block_inner}>
            <div className={style.text}>
              <h6 className={style.title}>Дизайн</h6>
              <p className={style.description}>Собственного производства</p>
            </div>
            <div className={style.line}>
              <div className={style.line_inner}>
                <span className={style.dote} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            style.block_2,
            activeCategory === 1 && style.block_active
          )}
        >
          <div className={style.block_inner}>
            <div className={style.text}>
              <h6 className={style.title}>Материалы</h6>
              <p className={style.description}>Собственного производства</p>
            </div>
            <div className={style.line}>
              <div className={style.line_inner}>
                <span className={style.dote} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={clsx(
            style.block_3,
            activeCategory === 2 && style.block_active
          )}
        >
          <div className={style.block_inner}>
            <div className={style.text}>
              <h6 className={style.title}>Каркас</h6>
              <p className={style.description}>Собственного производства</p>
            </div>
            <div className={style.line}>
              <div className={style.line_inner}>
                <span className={style.dote} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
