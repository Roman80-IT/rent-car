import { useSelector } from 'react-redux';
import {
  Btn,
  CustomArrow,
  Form,
  FormItemWrapper,
  FromTo,
  FromToContainer,
  Label,
  MilageWrapper,
  Select,
} from './Filters.styled';
import { selectMaxPrice, selectMinPrice } from '../../redux/selectors';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const makes = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];

export const Filters = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [brand, setBrand] = useState('');
  const maxPrice = useSelector(selectMaxPrice);
  const minPrice = useSelector(selectMinPrice);

  const createRange = (min, max, step) => {
    const result = [];
    for (let i = Math.ceil(min / 10) * 10; i <= max; i += step) {
      result.push(i);
    }
    return result;
  };

  useEffect(() => {
    if (searchParams.has('brand')) {
      setBrand(searchParams.get('brand'));
    } else {
      setBrand('');
    }
  }, [searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    const brand = e.target.brand.value;
    setSearchParams({ brand });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Label>Car brand</Label>
        <FormItemWrapper>
          <Select name="brand" id="brand" width="224px" defaultValue={brand}>
            <option value="" disabled hidden>
              Enter the text
            </option>
            {makes.map(item => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </Select>
          <CustomArrow />
        </FormItemWrapper>
      </label>
      <label>
        <Label>Price/ 1 hour</Label>
        <FormItemWrapper>
          <Select name="price" id="price" width="125px">
            <option value="" disabled selected hidden>
              To $
            </option>
            {createRange(minPrice, maxPrice, 10).map(price => (
              <option value={price} key={price}>
                {price}
              </option>
            ))}
          </Select>
          <CustomArrow />
        </FormItemWrapper>
      </label>
      <label>
        <Label>Сar mileage / km</Label>
        <FromToContainer>
          <FormItemWrapper>
            <FromTo>From</FromTo>
            <MilageWrapper
              type="number"
              name="min-milege"
              id="min-milege"
              $side="left"
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <FromTo>To</FromTo>
            <MilageWrapper
              type="number"
              name="max-milege"
              id="max-milege"
              $side="right"
            />
          </FormItemWrapper>
        </FromToContainer>
      </label>
      <Btn>Search</Btn>
    </Form>
  );
};
