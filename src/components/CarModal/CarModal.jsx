import {
  Description,
  Img,
  MainText,
  TextModel,
} from 'components/General/General.styled';
import {
  AdditionalTextBlock,
  BlockTitle,
  Btn,
  Condition,
  ConditionList,
  Content,
  DescriptionText,
  ImgContainer,
  Value,
} from './CarModal.styled';
import Modal from 'components/General/Modal/Modal';

export const CarModal = ({ data, close }) => {
  const {
    item: {
      id,
      make,
      year,
      model,
      type,
      img,
      rentalPrice,
      mileage,
      functionalities,
      fuelConsumption,
      engineSize,
      description,
      accessories,
      rentalConditions,
    },
    city,
    country,
  } = data;

  const parsedRentalConditions = rentalConditions.split('\n');
  const formattedMileage = mileage
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <Modal close={close}>
      <Content>
        <ImgContainer>
          <Img src={img} alt="" />
        </ImgContainer>
        <MainText>
          <h2>
            {make}
            <TextModel> {model}</TextModel>, {year}
          </h2>
        </MainText>
        <AdditionalTextBlock>
          <Description>{city}</Description>
          <Description>{country}</Description>
          <Description>Id: {id}</Description>
          <Description>Year: {year}</Description>
          <Description>Type: {type}</Description>
        </AdditionalTextBlock>
        <AdditionalTextBlock>
          <Description>Fuel Consumption: {fuelConsumption}</Description>
          <Description>Engine Size: {engineSize}</Description>
        </AdditionalTextBlock>
        <DescriptionText>{description}</DescriptionText>
        <BlockTitle>Accessories and functionalities:</BlockTitle>
        <AdditionalTextBlock>
          {accessories.map(item => (
            <Description key={item}>{item}</Description>
          ))}
        </AdditionalTextBlock>
        <AdditionalTextBlock>
          {functionalities.map(item => (
            <Description key={item}>{item}</Description>
          ))}
        </AdditionalTextBlock>
        <BlockTitle>Rental Conditions:</BlockTitle>
        <ConditionList>
          {parsedRentalConditions.map(item => (
            <Condition key={item}>{item}</Condition>
          ))}
          <Condition>
            Mileage: <Value>{formattedMileage}</Value>
          </Condition>
          <Condition>
            Price: <Value>{rentalPrice}</Value>
          </Condition>
        </ConditionList>
        <Btn href="tel:+380730000000">Rental car</Btn>
      </Content>
    </Modal>
  );
};
