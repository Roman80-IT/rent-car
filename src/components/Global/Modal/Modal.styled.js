import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1200;
`;

export const ModalStyled = styled.div`
  position: relative;
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  padding: 40px 12px 24px 12px;
  border-radius: 24px;
  background-color: ${({ theme: { colors } }) => colors.primeryWhite};

  @media screen and (min-width: 768px) {
    padding: 40px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform var(--animation-time) var(--animation-cubic);
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;
