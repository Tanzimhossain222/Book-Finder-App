import Footer from "../common/Footer";
import Navbar from "../common/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
