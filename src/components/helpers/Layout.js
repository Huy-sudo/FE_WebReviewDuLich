import Footer from "../footer/Footer";
import React, {useContext, useState, useEffect} from "react";
import Navigation from "../header/Navigation/Navigation";
import UserDetail from "../context/UserDetail";

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
