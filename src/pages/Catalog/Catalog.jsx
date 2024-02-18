import { CarList } from "components/CarList/CarList";
import { Filters } from "components/Filters/Filters";
import { Page } from "components/General/General.styled";

export const Catalog = () => {
  return (
    <Page>
      <Filters />
      <CarList />
    </Page>
  );
};
