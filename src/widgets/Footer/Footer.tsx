import style from './Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { getFullYear } from '@/shared/utils/getFullYear';

export const Footer = () => {
  const year = getFullYear();

  return (
    <footer className={style.footer}>
      <div className={style.footer_inner}>
        <div className={style.logo_inner}>
          <Image
            className={style.logo}
            src="/icons/logo.svg"
            width={295}
            height={117}
            alt="logo"
          />
          <p className={style.text}>
            Строим современные, теплые и эстетичные дома для людей и для жизни
          </p>
        </div>
        <div className={style.navigation}>
          <h4 className={style.title}>Карта сайта</h4>
          <ul className={style.list}>
            <li className={style.link}>О компании</li>
            <li className={style.link}>Проекты</li>
            <li className={style.link}>Каталог</li>
            <li className={style.link}>Промо</li>
          </ul>
        </div>
        <div className={style.contacts}>
          <h4 className={style.title}>Контакты</h4>
          <ul className={style.list}>
            <Link href={'/'} className={style.link}>
              <Image
                className={style.icon}
                src="/icons/phone.svg"
                alt="phone"
                width={24}
                height={24}
              />
              <span className={style.phone}>123 456 789</span>
            </Link>
            <Link href={'/'} className={style.link}>
              <Image
                className={style.icon}
                src="/icons/mail.svg"
                alt="mail"
                width={24}
                height={24}
              />
              <span className={style.phone}>hello@мыдома.рф</span>
            </Link>
          </ul>
        </div>
        <div className={style.socials}>
          <h4 className={style.title}>Социальные сети</h4>
          <ul className={style.socials_link}>
            <Link href={''}>
              <Image
                className={style.social_icon}
                src="/icons/telegram.svg"
                width={25}
                height={25}
                alt="telgram"
              />
            </Link>
            <Link href={''}>
              <Image
                src="/icons/whatsapp.svg"
                width={25}
                height={25}
                alt="whatsapp"
              />
            </Link>
          </ul>
        </div>
      </div>
      <div className={style.rights}>© {year} Все права защищены</div>
    </footer>
  );
};
