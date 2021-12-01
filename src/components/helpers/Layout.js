import Footer from "../footer/Footer";
import Navigation from "../header/Navigation/Navigation";
import AuthenContext from "../context/AuthenContext";
function Layout(props) {
  
  function getUserInput(value) {
      props.getUserInputHandler(value);
  }

  return (
    <AuthenContext.Provider value={{isLoggedIn: false}}>
      <Navigation onGetUserInput={getUserInput}/>
      <main>{props.children}</main>
      <Footer />
    </AuthenContext.Provider>
  );
}

export default Layout;
