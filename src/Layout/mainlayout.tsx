import { useContext, useEffect } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

type Props = {};

const MainLayout = (props: Props) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return (
    <>
      <header>Header....</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer...</footer>
    </>
  );
};

export default MainLayout;