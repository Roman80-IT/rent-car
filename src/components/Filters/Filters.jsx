import { useDispatch, useSelector } from 'react-redux';
import {
  Btn,
  CustomArrow,
  Form,
  FormItemWrapper,
  FromTo,
  FromToContainer,
  Label,
  MilageWrapper,
  Selector,
  SelectorItem,
  SelectorWrapper,
} from './Filters.styled';
import { selectFilters } from '../../redux/selectors';
import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setFilters } from '../../redux/filtersSlice';
import { Dropdown } from 'components/Global/Dropdown/Dropdown';

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
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { brand, price, mileageFrom, mileageTo } = useSelector(selectFilters);
  const [brandSelect, setBrandSelect] = useState(brand);
  const [priceSelect, setPriceSelect] = useState(brand);

  const [isBrandDropdownOpen, setIsBrandDropdownOpen] = useState(false);
  const [isPriceDropdownOpen, setIsPriceDropdownOpen] = useState(false);

  const createRange = (min, max, step) => {
    const result = [];
    for (let i = min; i <= max; i += step) {
      result.push(i);
    }
    return result;
  };

  useEffect(() => {
    setBrandSelect(brand);
    setPriceSelect(price);
  }, [brand, price]);

  useEffect(() => {
    dispatch(
      setFilters({
        brand: searchParams.get('brand'),
        price: Number.parseInt(searchParams.get('price')),
        mileageFrom: Number.parseInt(searchParams.get('mileageFrom')),
        mileageTo: Number.parseInt(searchParams.get('mileageTo')),
      })
    );
  }, [dispatch, searchParams]);

  const handleSubmit = e => {
    e.preventDefault();

    const brand = brandSelect;
    const price = priceSelect;
    const mileageFrom = e.target.minMileage.value;
    const mileageTo = e.target.maxMileage.value;
    setSearchParams({ brand, price, mileageFrom, mileageTo });
  };

  const handleSelectBrand = e => {
    setBrandSelect(e.target.attributes.value.value);
    setIsBrandDropdownOpen(false);
  };

  const handleSelectPrice = e => {
    setPriceSelect(e.target.attributes.value.value);
    setIsPriceDropdownOpen(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <label>
        <Label>Car brand</Label>
        <SelectorWrapper>
          <Selector onClick={() => setIsBrandDropdownOpen(true)} width="224px">
            {brandSelect || 'Enter the text'}
          </Selector>
          <CustomArrow $isOpen={isBrandDropdownOpen} />
          {isBrandDropdownOpen && (
            <Dropdown
              close={() => {
                setIsBrandDropdownOpen(false);
              }}
            >
              <ul>
                {makes.map(item => (
                  <SelectorItem
                    onClick={handleSelectBrand}
                    key={item}
                    value={item}
                  >
                    {item}
                  </SelectorItem>
                ))}
              </ul>
            </Dropdown>
          )}
        </SelectorWrapper>
      </label>
      <label>
        <Label>Price/ 1 hour</Label>
        <SelectorWrapper>
          <Selector onClick={() => setIsPriceDropdownOpen(true)} width="125px">
            {priceSelect || 'To $'}
          </Selector>
          <CustomArrow $isOpen={isPriceDropdownOpen} />
          {isPriceDropdownOpen && (
            <Dropdown
              close={() => {
                setIsPriceDropdownOpen(false);
              }}
            >
              <ul>
                {createRange(40, 500, 10).map(price => (
                  <SelectorItem
                    onClick={handleSelectPrice}
                    value={price}
                    key={price}
                  >
                    {price}
                  </SelectorItem>
                ))}
              </ul>
            </Dropdown>
          )}
        </SelectorWrapper>
      </label>
      <label>
        <Label>Сar mileage / km</Label>
        <FromToContainer>
          <FormItemWrapper>
            <FromTo>From</FromTo>
            <MilageWrapper
              type="number"
              name="minMileage"
              id="minMileage"
              defaultValue={mileageFrom}
              $side="left"
            />
          </FormItemWrapper>
          <FormItemWrapper>
            <FromTo>To</FromTo>
            <MilageWrapper
              type="number"
              name="maxMileage"
              id="maxMileage"
              defaultValue={mileageTo}
              $side="right"
            />
          </FormItemWrapper>
        </FromToContainer>
      </label>
      <Btn>Search</Btn>
    </Form>
  );
};
