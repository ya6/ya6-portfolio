import {Outlet} from "react-router-dom"

const Layout = () => {
  return (
    <>
      <header></header>
      
        <Outlet />
      

      <footer>ya6 2022</footer>
    </>
  );
};

export default Layout;
