import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../redux/operations';
import { selectAdverts } from '../../redux/selectors';

import { СarCard } from './СarCard/СarCard';
import { Btn, Wrapper } from './CarList.styled';

export const CarList = () => {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchAll({ page, limit: 12 }));
  }, [dispatch, page]);

  return (
    <>
      <Wrapper>
        {adverts.map((item) => (
          <СarCard key={item.id} item={item} />
        ))}
      </Wrapper>
      <Btn
        onClick={() => {
          setPage(page + 1);
        }}
      >
        Load more
      </Btn>
    </>
  );
};
