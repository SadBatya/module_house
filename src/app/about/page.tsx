import { SectionCompany } from '@/page/page-about/ui/section-company';
import { SectionProduction } from '@/page/page-about/ui/section-production';
import { SectionLicense } from '@/page/page-about/ui/section-license';
import { SectionMotivation } from '@/page/page-about/ui/section-motivation';

export default function About() {
  return (
    <>
      <SectionCompany />
      <SectionProduction />
      <SectionLicense />
      <SectionMotivation />
    </>
  );
}
