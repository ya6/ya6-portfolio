import SEO from "../../common/SEO";
import ScrollTop from "../../common/footer/ScrollTop";
import HeaderYA from "../../common/header/HeaderYA";
import CopyrightTwo from "../../common/footer/CopyrightTwo";

import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <SEO title="Freelancer" />
      <main className="page-wrapper">
        <HeaderYA btnStyle="btn-small" HeaderSTyle="header-transparent" />
        <Outlet />
        <CopyrightTwo />
      </main>

      <ScrollTop />
    </>
  );
};

export default Layout;
