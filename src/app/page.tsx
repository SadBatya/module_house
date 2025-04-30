import { SectionMain } from '@/page/page-main';
import { SectionWhatWeBuilding } from '@/page/page-main';
import { SectionCatalog } from '@/page/page-main';
import { SectionPromoProject } from '@/page/page-main';
import { SectionAbout } from '@/page/page-main';
import { SectionGuarantee } from '@/page/page-main';
import { SectionStructureHouse } from '@/page/page-main';
import { SectionSteps } from '@/page/page-main';
import { SectionControl } from '@/page/page-main';
import { SectionCheck } from '@/page/page-main';
import { SectionOurProject } from '@/page/page-main/ui/section-our-project/section-our-project';
import { SectionCheckPrice } from '@/page/page-main';

export default function Home() {
  return (
    <>
      <SectionMain />
      <SectionWhatWeBuilding />
      <SectionCatalog />
      <SectionPromoProject />
      <SectionAbout />
      <SectionGuarantee />
      <SectionStructureHouse />
      <SectionSteps />
      <SectionControl />
      <SectionCheck />
      <SectionOurProject />
      <SectionCheckPrice />
    </>
  );
}
