import { Breadcrumbs } from '@/shared/ui';
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
          {
            label: 'А-фрейм “Борн”',
            path: INTERNAL_ROUTES.CATALOG,
          },
        ]}
      />
    </>
  );
}
