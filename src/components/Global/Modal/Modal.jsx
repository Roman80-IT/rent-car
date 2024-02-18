import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

import { CloseButton, ModalStyled, Overlay } from './Modal.styled';
import { ReactComponent as Close } from '../../../icons/x.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ close, children }) => {
  useEffect(() => {
    const closeModalEsc = ({ code }) => {
      if (code === 'Escape') {
        close();
      }
    };
    document.addEventListener('keydown', closeModalEsc);
    disableBodyScroll(document.body);

    return () => {
      document.removeEventListener('keydown', closeModalEsc);
      enableBodyScroll(document.body);
    };
  }, [close]);

  const closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
    }
  };

  return createPortal(
    <Overlay onClick={closeModal}>
      <ModalStyled>
        <CloseButton onClick={close}>
          <Close />
        </CloseButton>
        {children}
      </ModalStyled>
    </Overlay>,
    modalRoot
  );
};
