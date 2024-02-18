import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background-color: rgba(11, 68, 205, 0.5);
  color: ${({ theme: { colors } }) => colors.primeryWhite};
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 76px;
  padding: 8px 16px;

  @media screen and (min-width: 320px) {
    margin: 0 auto;
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    height: 60px;
  }

  @media screen and (min-width: 1440px) {
    padding: 8px 128px;
    width: 1440px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0.07em;
`;
