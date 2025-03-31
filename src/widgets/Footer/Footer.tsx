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
            <li className={style.link}>Promo</li>
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
          <h4 className={style.title}>Социальные сети</h4>
          <ul className={style.socials}>
            <Link href={''}>
              <Image
                src="/icons/instagram.svg"
                width={18}
                height={18}
                alt="instagram"
              />
            </Link>
            <Link href={''}>
              <Image
                src="/icons/instagram.svg"
                width={18}
                height={18}
                alt="instagram"
              />
            </Link>
            <Link href={''}>
              <Image
                src="/icons/instagram.svg"
                width={18}
                height={18}
                alt="instagram"
              />
            </Link>
            <Link href={''}>
              <Image
                src="/icons/instagram.svg"
                width={18}
                height={18}
                alt="instagram"
              />
            </Link>
          </ul>
        </div>
        <div className={style.map}>
          <h4 className={style.title}>Мы на карте</h4>
          <div className={style.location}>
            <Image
              className={style.location_icon}
              src="/icons/location.svg"
              alt="location"
              width={17}
              height={24}
            />
            <span className={style.location_text}>Адрес офиса</span>
          </div>
          <div className={style.address_text}>
            г. Москва, пл. Победы, д. 4, <br />
            подъезд 5, 2 этаж, оф. 204
          </div>
          <div className={style.map_coordinates}></div>
        </div>
      </div>
      <div className={style.rights}>© {year} Все права защищены</div>
    </footer>
  );
};
