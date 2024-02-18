import { IconLink, List, ListItem } from "./Menu.styled";
import { ReactComponent as FavoritesIcon } from "../../icons/normal.svg";

export const Menu = () => {
  return (
    <List>
      <ListItem>
        <a href="/catalog">Catalog</a>
      </ListItem>
      <ListItem>
        <IconLink href="/favorites">
          <FavoritesIcon />
        </IconLink>
      </ListItem>
    </List>
  );
};
