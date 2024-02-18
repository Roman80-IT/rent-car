import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Wrapper } from "./Global/Global.styled";

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={"Load"}>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </Suspense>
    </>
  );
};
