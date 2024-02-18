import { styled } from 'styled-components';
import theme from 'components/themeJSX';

export const Wrapper = styled.div`
  margin: 0 auto;
  // padding: 10px 18px;
  padding: 12px 16px;
  width: 100%;

  @media screen and (min-width: 320px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 24px 128px 150px;
  }
`;

export const Page = styled.div`
  margin-top: 76px;

  @media screen and (min-width: 768px) {
    margin-top: 60px;
  }
`;

export const TextModel = styled.span`
  color: ${theme.colors.primaryBlue};
`;

export const Img = styled.img`
  display: block;
  object-fit: cover;

  height: 100%;
  width: 100%;
`;

export const MainText = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 8px;

  // font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
`;

export const Description = styled.span`
  &:not(:last-child)::after {
    display: inline-block;

    content: '';
    vertical-align: middle;

    width: 1px;
    height: 16px;
    margin: 0 6px;

    background-color: ${theme.colors.translucentBlack_1};
  }
`;
