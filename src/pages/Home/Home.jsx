import { Wrapper, TitleWrapper, Title, SubTitle, Button } from './Home.styled';

export const Home = () => {
  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Car Rental Company in Ukraine</Title>
        <SubTitle>
          Orient yourself in your travels - choose our cars for best comfort
        </SubTitle>
      </TitleWrapper>
      <Button href="/catalog">Check the price and order a car online</Button>
    </Wrapper>
  );
};
