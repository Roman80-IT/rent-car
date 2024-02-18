import { Menu } from "components/Menu/Menu";
import { Container, Logo, StyledHeader } from "./Header.styled";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Logo href="/">DriveEase Rental</Logo>
        <Menu />
      </Container>
    </StyledHeader>
  );
};
