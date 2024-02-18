import { useSelector } from 'react-redux';
import { AdvertCard } from 'components/AdvertCard/AdvertCard';
import { selectFavorites } from '../../redux/selectors';
import { Grid } from 'components/Global/Global.styled';

export const FavoritesCatalog = () => {
  const adverts = useSelector(selectFavorites);

  return (
    <Grid>
      {adverts.map(item => (
        <AdvertCard key={item.id} item={item} />
      ))}
    </Grid>
  );
};
