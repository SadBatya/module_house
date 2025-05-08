import Link from 'next/link';
import { INTERNAL_ROUTES } from '@/shared/routes';
import style from './BreadCrumbs.module.scss';

export const Breadcrumbs = ({ page }: { page: string }) => (
  <nav className={style.breadcrumbs}>
    <Link href={INTERNAL_ROUTES.HOME}>Главная</Link> / <span>{page}</span>
  </nav>
);
