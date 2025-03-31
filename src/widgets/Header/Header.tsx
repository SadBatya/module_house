import style from './Header.module.scss';
import Image from 'next/image';

export const Header = () => (
  <header className={style.header}>
    <div className={style.header_inner}>
      <Image
        className={style.logo}
        src="/icons/logo.svg"
        width={121}
        height={48}
        alt="logo"
      />
      <nav className={style.navigation}>
        <ul className={style.list}>
          <li className={style.link}>Проекты</li>
          <li className={style.link}>О нас</li>
          <li className={style.link}>Обратная связь</li>
        </ul>
      </nav>
      <div className={style.contact}>
        <Image
          src="/icons/whatsapp.svg"
          width={24}
          height={24}
          alt="whatsapp"
        />
        <span className={style.phone}>+7 999 999 99 99</span>
      </div>
    </div>
  </header>
);
