import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Wrapper } from 'components/General/General.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={'Loading...'}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
    </>
  );
};

export default SharedLayout;
