import { SectionCompany } from '@/page/page-about/ui/section-company';
import { SectionProduction } from '@/page/page-about/ui/section-production';
import { SectionLicense } from '@/page/page-about/ui/section-license';
import { SectionMotivation } from '@/page/page-about/ui/section-motivation';
import { SectionReviews } from '@/page/page-about/ui/section-reviews';
import { INTERNAL_ROUTES } from '@/shared/routes';
import { Breadcrumbs } from '@/shared/ui';

export default function About() {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: 'О нас',
            path: INTERNAL_ROUTES.ABOUT,
          },
        ]}
      />
      <SectionCompany />
      <SectionProduction />
      <SectionLicense />
      <SectionMotivation />
      <SectionReviews />
    </>
  );
}
