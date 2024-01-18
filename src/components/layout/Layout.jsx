import Footer from "../common/Footer";
import Navbar from "../common/Navbar";
import PropsType from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropsType.node.isRequired,
};

export default Layout;
