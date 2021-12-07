import React, { useContext, useState } from "react";
import classes from "./MostReviewedPlacesChart.module.css";
import Button from "../../helpers/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import SearchQuery from "../../context/SearchQuery";

function MostReviewedPlacesChart(props) {
  let places = props.data.slice(0, 5);
  let rank = 1;
  let context = useContext(SearchQuery);

  function moreHandler(event) {
    //console.log(event);
    window.location.href = "./chart";
  }
  function seachHandler(event) {
    context.value = event.target.value;
    console.log(context.value);
  }

  return (
    <section className={classes["content-background"]}>
      <div className={classes["content-wrapper"]}>
        <h1>Top 5 địa điểm được review nhiều nhất</h1>
        {places.map((place) => {
          return (
            <div key={place.ID} className={classes["place-content"]}>
              <p className={classes.rank}>{rank++}</p>
              <img
                className={classes.image}
                src={place.picture}
                alt={`${place.name} example`}
              />
              <div className={classes["name-wrapper"]}>
                <p className={classes.name}>
                  {place.name} <br />
                  <span className={classes.totalreview}>
                    Số bài review: {place.totalReview}
                  </span>
                </p>
              </div>
              <label className={classes.arrow}>
                <Link to={`/search`}>
                  <input
                    className={classes.search}
                    value={place.ID}
                    type="radio"
                    onClick={seachHandler}
                  />
                  <FontAwesomeIcon
                    className={classes.rightbutton}
                    icon={faArrowRight}
                  />
                </Link>
              </label>
            </div>
          );
        })}
        <Button className={classes.more} onClick={moreHandler}>
          <div className={classes.morebutton}>Xem thêm</div>
        </Button>
      </div>
    </section>
  );
}

export default MostReviewedPlacesChart;
