import { SectionMain } from '@/widgets/page-main';
import { SectionWhatWeBuilding } from '@/widgets/page-main';
import { SectionCatalog } from '@/widgets/page-main';
import { SectionPromoProject } from '@/widgets/page-main';
import { SectionAbout } from '@/widgets/page-main';
import { SectionGuarantee } from '@/widgets/page-main';

export default function Home() {
  return (
    <div>
      <SectionMain />
      <SectionWhatWeBuilding />
      <SectionCatalog />
      <SectionPromoProject />
      <SectionAbout />
      <SectionGuarantee />
    </div>
  );
}
