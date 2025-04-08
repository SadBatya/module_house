import { Accordion } from '@/widgets/Accordion';
import { SectionMain } from '@/widgets/page-main';
import { SectionWhatWeBuilding } from '@/widgets/page-main/ui/section-what-we-building';

export default function Home() {
  return (
    <div>
      <SectionMain />
      <SectionWhatWeBuilding />
      <Accordion />
    </div>
  );
}
