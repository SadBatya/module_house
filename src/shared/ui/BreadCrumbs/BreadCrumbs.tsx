import Link from 'next/link';
import { INTERNAL_ROUTES } from '@/shared/routes';
import style from './BreadCrumbs.module.scss';

interface Props {
  items: {
    label: string;
    path: string;
  }[];
}

export const Breadcrumbs = ({ items }: Props) => (
  <nav className={style.breadcrumbs}>
    <Link href={INTERNAL_ROUTES.HOME}>Главная</Link>
    {items.map(({ label, path }) => (
      <>
        /<Link href={path}>{label}</Link>
      </>
    ))}
  </nav>
);
