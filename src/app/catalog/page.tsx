import { Breadcrumbs } from '@/shared/ui';
import { SectionCatalog } from '@/page/page-catalog';
import { INTERNAL_ROUTES } from '@/shared/routes';

export default function Catalog() {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: 'Каталог',
            path: INTERNAL_ROUTES.CATALOG,
          },
        ]}
      />
      <SectionCatalog />
    </>
  );
}
