import styled from 'styled-components';
import theme from 'components/themeJSX';

// export const StyledMenu = styled.nav`
//   display: flex;
//   column-gap: 130px;
//   margin: 0 auto;

//   font-size: 26px;
//   font-weight: 600;

//   color: ${theme.colors.lightYellow};
//   a {
//     padding: 12px 0;
//     transition: 0.35s;

//     &:hover {
//       color: ${theme.colors.secondaryOrange};
//     }
//   }

//   .active {
//     color: ${theme.colors.secondaryOrange};
//   }
// `;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ListItem = styled.li`
  padding: 8px 8px;
  border-radius: 12px;
  background: ${theme.colors.primaryBlue};

  color: ${theme.colors.primaryWhite};
  font-weight: 600;
  line-height: 1.43;
  text-transform: uppercase;
  letter-spacing: 0.08em;

  cursor: pointer;

  transition: background-color ${theme.animation.duration}
    ${theme.animation.cubicBezier};

  &:hover,
  &:focus {
    background: ${theme.colors.darkBlue};
  }
`;

export const IconLink = styled.a`
  display: flex;
`;
