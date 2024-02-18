import { styled } from 'styled-components';
import bgImgDesktop from '../../images/bg-desktop.jpg';
import bgImgTablet from '../../images/bg-tablet.png';
import bgImgMobile from '../../images/bg-mobile.png';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  left: 0;
  top: 0;
  z-index: -100;
  min-width: 100vw;
  min-height: 100vh;
  text-align: center;
  background-image: url(${bgImgMobile});
  background-size: cover;
  background-position: center;

  @media screen and (min-width: 768px) {
    background-image: url(${bgImgTablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bgImgDesktop});
  }
`;

export const Wrapper2 = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  // justify-content: space-around;
  justify-content: end;
  align-items: center;
  text-align: center;

  gap: 55vh;
  left: 0;
  top: 0;
  min-width: 100vw;
  min-height: 100vh;
  z-index: -1;

  background-image: url(${bgImgMobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media screen and (min-width: 768px) {
    background-image: url(${bgImgTablet});
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${bgImgDesktop});
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
`;

export const Title = styled.h1`
  text-transform: uppercase;
  font-size: 44px;
  letter-spacing: 0.07em;
`;

export const Text = styled.p`
  font-size: 24px;
`;

export const ButtonLink = styled(NavLink)`
  display: flex;
  width: fit-content;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${({ theme: { colors } }) => colors.lightBlue};

  color: ${({ theme: { colors } }) => colors.primeryWhite};
  font-weight: 600;
  line-height: 1.43;

  transition: background-color var(--animation-time) var(--animation-cubic);

  &:hover,
  &:focus {
    background: ${({ theme: { colors } }) => colors.darkBlue};
  }
`;
