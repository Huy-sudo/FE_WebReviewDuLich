import React from "react";
import Navigation from "../../header/Navigation/Navigation";
import MostReviewedPlacesChart from "./MostReviewedPlacesChart";
import FeaturedPlaces from "./FeaturedPlaces";

import classes from "./Home.module.css";
import Footer from "../../footer/Footer";

function Home(props) {
  return (
    <>
      <Navigation />
      <MostReviewedPlacesChart />
      <FeaturedPlaces />
      <Footer />
    </>
  );
}

export default Home;
