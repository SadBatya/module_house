import { Breadcrumbs } from '@/shared/ui';
import { INTERNAL_ROUTES } from '@/shared/routes';
import {
  SectionPreview,
  SectionComplectation,
  SectionDescription,
  SectionGallery,
  SectionForm,
} from '@/page/page-project';

export default function Catalog() {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: 'Каталог',
            path: INTERNAL_ROUTES.CATALOG,
          },
          {
            label: 'А-фрейм “Борн”',
            path: INTERNAL_ROUTES.CATALOG,
          },
        ]}
      />
      <SectionPreview />
      <SectionComplectation />
      <SectionGallery />
      <SectionDescription />
      <SectionForm />
    </>
  );
}
