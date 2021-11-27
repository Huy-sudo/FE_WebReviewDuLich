import React from "react";
import MostReviewedPlacesChart from "../components/main/Home/MostReviewedPlacesChart";
import FeaturedPlaces from "../components/main/Home/FeaturedPlaces";
import Layout from "../components/helpers/Layout"

function Home(props) {
  return (
    <>
      <Layout>
      <MostReviewedPlacesChart />
      <FeaturedPlaces />
      </Layout>
    </>
  );
}

export default Home;
