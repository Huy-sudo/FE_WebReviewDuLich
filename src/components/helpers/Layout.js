import Footer from "../footer/Footer";
import Navigation from "../header/Navigation/Navigation";
function Layout(props) {
  
  function getUserInput(value) {
      props.getUserInputHandler(value);
  }

  return (
    <>
      <Navigation onGetUserInput={getUserInput}/>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
