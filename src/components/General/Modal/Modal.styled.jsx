import styled from 'styled-components';
import theme from 'components/themeJSX';

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;

  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  z-index: 100;

  background: ${theme.colors.translucentBlack_5};
`;

export const ModalStyled = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  padding: 40px 12px 24px 12px;

  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  border-radius: 24px;
  background-color: ${theme.colors.primaryWhite};

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  top: 8px;
  right: 8px;

  background: none;
  border: none;

  transition: transform ${theme.animation.duration}
    ${theme.animation.cubicBezier};

  cursor: pointer;

  &:hover {
    transform: scale(1.15);
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;
