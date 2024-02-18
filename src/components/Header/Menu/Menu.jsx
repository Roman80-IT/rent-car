// import { NavLink } from "react-router-dom";
// import { StyledMenu } from "./Menu.styled";

// export const Menu = () => {
//   return (
//     <StyledMenu>
//       <NavLink to={"/home"}>Home</NavLink>
//       <NavLink to={"/catalog"}>Catalog</NavLink>
//       <NavLink to={"/favorites"}>Favorite</NavLink>
//     </StyledMenu>
//   );
// };

import { IconLink, List, ListItem } from './Menu.styled';
// import { ReactComponent as FavoriteIcon } from '../../assets/icons/fav-normal.svg';
// import FavoritesIcon from '../../assets/icons/fav-normal.svg';

export const Menu = () => {
  return (
    <List>
      <ListItem>
        <a href="/catalog">Catalog</a>
      </ListItem>
      <ListItem>
        <IconLink href="/favorites">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="#ff4500"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15.6301 3.45753C15.247 3.07428 14.7922 2.77026 14.2916 2.56284C13.791 2.35542 13.2545 2.24866 12.7126 2.24866C12.1707 2.24866 11.6342 2.35542 11.1336 2.56284C10.633 2.77026 10.1782 3.07428 9.79509 3.45753L9.00009 4.25253L8.20509 3.45753C7.43132 2.68376 6.38186 2.24906 5.28759 2.24906C4.19331 2.24906 3.14386 2.68376 2.37009 3.45753C1.59632 4.2313 1.16162 5.28075 1.16162 6.37503C1.16162 7.4693 1.59632 8.51876 2.37009 9.29253L3.16509 10.0875L9.00009 15.9225L14.8351 10.0875L15.6301 9.29253C16.0133 8.90946 16.3174 8.45464 16.5248 7.95404C16.7322 7.45345 16.839 6.91689 16.839 6.37503C16.839 5.83316 16.7322 5.2966 16.5248 4.79601C16.3174 4.29542 16.0133 3.84059 15.6301 3.45753Z" />
          </svg>
        </IconLink>
      </ListItem>
    </List>
  );
};
