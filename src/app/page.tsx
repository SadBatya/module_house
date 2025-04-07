import style from './page.module.scss';
import { SliderHouses } from '@/widgets/SliderHouses/SliderHouses';
import { SectionMain } from '@/widgets/page-main';

export default function Home() {
  return (
    <div>
      <SectionMain />
      <SliderHouses />
    </div>
  );
}
