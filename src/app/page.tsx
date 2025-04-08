import { SectionMain } from '@/widgets/page-main';
import { SectionWhatWeBuilding } from '@/widgets/page-main';
import { SectionCatalog } from '@/widgets/page-main';

export default function Home() {
  return (
    <div>
      <SectionMain />
      <SectionWhatWeBuilding />
      <SectionCatalog />
    </div>
  );
}
