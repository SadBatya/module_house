'use client';
import style from './Header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { INTERNAL_ROUTES, EXTERNAL_ROUTES } from '@/shared/routes';
import { useState } from 'react';
import clsx from 'clsx';
import { useBodyScrollLock } from '@/shared/hooks/useBodyScrollLock';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useBodyScrollLock(menuOpen);

  return (
    <header className={style.header}>
      <div className={style.header_inner}>
        <Link href={INTERNAL_ROUTES.HOME}>
          <Image
            className={style.logo}
            src="/icons/logo.svg"
            width={121}
            height={48}
            alt="logo"
          />
        </Link>

        <nav className={style.navigation}>
          <ul className={style.list}>
            <Link href={INTERNAL_ROUTES.PROJECTS} className={style.link}>
              Проекты
            </Link>
            <Link href={INTERNAL_ROUTES.ABOUT} className={style.link}>
              О нас
            </Link>
            <Link href={INTERNAL_ROUTES.FEEDBACK} className={style.link}>
              Обратная связь
            </Link>
          </ul>
        </nav>
        <Link
          href={EXTERNAL_ROUTES.TELEGRAM}
          target="_blank"
          className={style.contact}
        >
          <Image
            src="/icons/telegram.svg"
            width={35}
            height={35}
            alt="whatsapp"
          />
          <span className={style.phone}>+7 999 999 99 99</span>
        </Link>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={clsx(
            style.burger_button,
            menuOpen && style.burger_button_active
          )}
        >
          <span className={style.burger_line} />
        </button>
        <div
          className={clsx(
            style.burger_menu,
            menuOpen && style.burger_menu_open
          )}
        >
          <nav className={style.nav_list}>
            <ul className={style.list_inner}>
              <Link href={INTERNAL_ROUTES.PROJECTS} className={style.list_item}>
                Проекты
              </Link>
              <Link href={INTERNAL_ROUTES.ABOUT} className={style.list_item}>
                О нас
              </Link>
              <Link href={INTERNAL_ROUTES.FEEDBACK} className={style.list_item}>
                Обратная связь
              </Link>
              <Link href={EXTERNAL_ROUTES.TELEGRAM} className={style.list_item}>
                <Image
                  src="/icons/telegram.svg"
                  width={35}
                  height={35}
                  alt="whatsapp"
                />
                +7 999 999 99 99
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
