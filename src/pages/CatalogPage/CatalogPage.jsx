import { Catalog } from 'components/Catalog/Catalog';
import { Filters } from 'components/Filters/Filters';
import { Page } from 'components/Global/Global.styled';

export const CatalogPage = () => {
  return (
    <Page>
      <Filters />
      <Catalog />
    </Page>
  );
};
