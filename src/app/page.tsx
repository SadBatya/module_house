import { SectionMain } from '@/pages/page-main';
import { SectionWhatWeBuilding } from '@/pages/page-main';
import { SectionCatalog } from '@/pages/page-main';
import { SectionPromoProject } from '@/pages/page-main';
import { SectionAbout } from '@/pages/page-main';
import { SectionGuarantee } from '@/pages/page-main';

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
