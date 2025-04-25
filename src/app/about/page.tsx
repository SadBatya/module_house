import { SectionProduction } from '@/page/page-about/ui/section-production/ui/section-production';
import { SectionCompany } from '@/page/page-about/ui/section-company';
import { SectionLicense } from '@/page/page-about/ui/section-license/ui/section-license';

export default function About() {
  return (
    <>
      <SectionCompany />
      <SectionProduction />
      <SectionLicense />
    </>
  );
}
