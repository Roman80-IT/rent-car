import { styled } from 'styled-components';
import theme from 'components/themeJSX';

export const StyledHeader = styled.header`
  position: fixed;

  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;

  color: ${theme.colors.secondaryOrangeRed};
  background-color: ${theme.colors.translucentBlue_5};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  // gap: 60px;
  width: 100%;
  height: 76px;
  padding: 8px 16px;

  @media screen and (min-width: 320px) {
    width: 320px;
    // padding: 0 10px;
    margin: 0 auto;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    // padding: 0 12px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    // padding: 0 42px;
    padding: 8px 128px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;

  font-size: 24px;
  font-weight: 700;
  letter-spacing: 0.1em;
`;

export const Car = styled.span`
  color: ${theme.colors.darkBlue_2};
  // font-weight: 700;
`;

export const Uaflag = styled.span`
  color: ${theme.colors.uaYellow};
`;
