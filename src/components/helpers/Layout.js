import Navigation, { useState } from "../header/Navigation/Navigation";
import Footer from "../footer/Footer";

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
