import { Section } from '@/shared/ui';
import { Title } from '@/shared/ui';
import style from './section-structure-house.module.scss';
import housePng from './assets/house.png';
import Image from 'next/image';
import clsx from 'clsx';

export const SectionStructureHouse = () => (
  <Section>
    <Title>Все продумано до мелочей</Title>
    <p className={style.description}>
      Для вашего комфортна используем только проверенные временем и опытом
      материалы от лидирующих поставщиков
    </p>
    <nav className={style.nav}>
      <ul className={style.nav_list}>
        <li className={clsx(style.nav_btn, style.nav_btn_active)}>
          Дизайн и несущие конструкции
        </li>
        <li className={style.nav_btn}>Mатериалы</li>
        <li className={style.nav_btn}>Отделка</li>
      </ul>
    </nav>
    <div className={style.house_container}>
      <Image className={style.house_img} src={housePng} alt="house" />
      <div className={style.block}>
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
      <div className={style.block_2}>
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
      <div className={style.block_3}>
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
