import style from './page.module.scss';
import { SectionCompany } from '@/app/about/sections/section-company/sectionCompany';

export default function About() {
  return (
    <main className={style.container}>
      <SectionCompany />
    </main>);
}

