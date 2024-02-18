import { useEffect, useRef } from 'react';

import { ModalStyled } from './Dropdown.styled';

export const Dropdown = ({ close, children }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        close();
      }
    };

    const closeDropdownEsc = ({ code }) => {
      if (code === 'Escape') {
        close();
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', closeDropdownEsc);
    console.log('lisener');

    return () => {
      document.removeEventListener('keydown', closeDropdownEsc);
      document.addEventListener('click', handleClickOutside);
      console.log('mount');
    };
  }, [close]);

  return <ModalStyled ref={dropdownRef}>{children}</ModalStyled>;
};
