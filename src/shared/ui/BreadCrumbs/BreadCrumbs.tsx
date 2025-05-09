import Link from 'next/link';
import { INTERNAL_ROUTES } from '@/shared/routes';
import style from './BreadCrumbs.module.scss';
import clsx from 'clsx';

interface Props {
  items: {
    label: string;
    path: string;
  }[];
}

export const Breadcrumbs = ({ items }: Props) => (
  <nav className={style.breadcrumbs}>
    <Link className={style.link} href={INTERNAL_ROUTES.HOME}>
      Главная
    </Link>
    {items.map(({ label, path }, index) => (
      <Link
        href={path}
        className={clsx(
          style.link,
          index === items.length - 1 && style.active_link
        )}
        key={index}
      >
        /{label}
      </Link>
    ))}
  </nav>
);
