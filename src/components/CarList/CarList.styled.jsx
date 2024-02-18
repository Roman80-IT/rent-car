import { styled } from 'styled-components';
import theme from 'components/themeJSX';

export const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(1, 274px);

  gap: 50px 29px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 353px);
  }

  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(4, 274px);
  }
`;

export const Btn = styled.button`
  display: block;

  margin: 100px auto 0;

  border: none;
  color: ${theme.colors.primaryBlue};
  background: none;

  // font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;

  cursor: pointer;

  transition: transform ${theme.animation.duration}
    ${theme.animation.cubicBezier};

  &:hover,
  &:focus {
    transform: scale(1.1);
    color: ${theme.colors.darkBlue};
  }
`;
