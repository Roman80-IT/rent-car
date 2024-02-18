import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/operations';
import { AdvertCard } from 'components/AdvertCard/AdvertCard';
import { selectAdverts } from '../../redux/selectors';
import { Btn } from './Catalog.styled';
import { Grid } from 'components/Global/Global.styled';

export const Catalog = () => {
  const LIMIT = 12;
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const [page, setPage] = useState(1);
  const [isLastPage, setLastPage] = useState(false);

  useEffect(() => {
    dispatch(fetchAll({ page, limit: LIMIT }));
  }, [dispatch, page]);

  useEffect(() => {
    if (adverts.length % LIMIT !== 0) {
      setLastPage(true);
    }
  }, [adverts]);

  return (
    <>
      <Grid>
        {adverts.map(item => (
          <AdvertCard key={item.id} item={item} />
        ))}
      </Grid>
      {!isLastPage && (
        <Btn
          onClick={() => {
            setPage(page + 1);
          }}
        >
          Load more
        </Btn>
      )}
    </>
  );
};
