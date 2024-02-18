import {
  ButtonLink,
  Text,
  TextContainer,
  Title,
  Wrapper,
} from './MainPage.styled';

export const MainPage = () => {
  return (
    <Wrapper>
      <TextContainer>
        <Title>Car Rental Company in Ukraine</Title>
        <Text>
          Orient yourself in your travels - choose our cars for best comfort
        </Text>
      </TextContainer>
      <ButtonLink to="/catalog">
        Check the price and order a car online
      </ButtonLink>
    </Wrapper>
  );
};
