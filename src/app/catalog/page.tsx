import { Breadcrumbs } from '@/shared/ui';
import { SectionCatalog } from '@/page/page-catalog';

export default function Catalog() {
  return (
    <>
      <Breadcrumbs page="Каталог" />
      <SectionCatalog />
    </>
  );
}
