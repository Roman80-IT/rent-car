import { Menu } from "components/Header/Menu/Menu";
import { Container, Logo, StyledHeader, Car, Uaflag } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo href="/">
          Rent
          <Car>Car</Car>
          <Uaflag>UA</Uaflag>
        </Logo>
        <Menu />
      </Container>
    </StyledHeader>
  );
};
