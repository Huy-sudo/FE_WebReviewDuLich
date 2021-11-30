import React, { useState } from "react";
import classes from "./MostReviewedPlacesChart.module.css";
import Button from "../../helpers/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function MostReviewedPlacesChart(props) {
  const [mostReviewedPlaces, setMostReviewedPlaces] = useState([]);

  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(null);
  let places = props.data.slice(0, 5);

  // props.data.map(place => {
  //   let { id, name, imgsrc, totalReview } = place;
  //   setMostReviewedPlaces(previousState => {
  //     return [
  //       ...previousState,
  //       place
  //     ];
  //   })
  // })

  // setMostReviewedPlaces()
  // useEffect(() => {
  //   getMostReviewedPlaces();
  // }, [getMostReviewedPlaces]); //makes sure it runs whenever functions changes

  return (
    <div className={classes["mostreviewed-wrapper"]}>
      <h1>Top 5 địa điểm được review nhiều nhất</h1>
      {places.map((place) => {
        return (
          <div key={place.id} className={classes["place-content"]}>
            <p className={classes.rank}>{place.id}</p>
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
      <Button className={classes.more}>
        <div className={classes.morebutton}>Xem thêm</div>
      </Button>
    </div>
  );
}

export default MostReviewedPlacesChart;
