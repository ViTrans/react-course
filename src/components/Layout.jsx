import Header from "./Header";

const Layout = ({ childrent }) => {
  return (
    <>
      <Header></Header>
      {childrent}
    </>
  );
};

export default Layout;
