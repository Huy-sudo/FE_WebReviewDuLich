import React from "react";
import classes from "./MostReviewedPlacesChart.module.css";
import Button from "../../helpers/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function MostReviewedPlacesChart(props) {
  let places = props.data.slice(0, 5); //will this re-render without state?
  let rank = 1;

  function moreHandler(event) {
    //console.log(event);
    window.location.href = "./chart";
  }

  return (
    <section className={classes["content-background"]}>
    <div className={classes["content-wrapper"]}>
      <h1>Top 5 địa điểm được review nhiều nhất</h1>
      {places.map((place) => {
        return (
          <div key={place.id} className={classes["place-content"]}>
            <p className={classes.rank}>{rank++}</p>
            <img
              className={classes.image}
              src={place.imgsrc}
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
            <Button className={classes.arrow}>
              <FontAwesomeIcon
                className={classes.rightbutton}
                icon={faArrowRight}
              />
            </Button>
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
