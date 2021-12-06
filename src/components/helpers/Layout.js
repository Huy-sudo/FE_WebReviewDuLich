import Footer from "../footer/Footer";
import Navigation from "../header/Navigation/Navigation";

function Layout(props) {

  return (
    <>
      <Navigation />
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
