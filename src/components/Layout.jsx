import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = ({ childrent }) => {
  return (
    <>
      <Header></Header>
      {childrent}
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
