import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classes from "./StarRating.module.css";

function StarRating(props) {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);


  function ratingChangeHandler(event) {
    setRating(event.target.value);
    props.onSaveData(event.target.value);
  }
  return (
    <div className={classes["rating-wrapper"]}>
      {[...Array(5)].map((star, i = 0) => {
        const ratingValue = i + 1;
        return (
          <label>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={ratingChangeHandler}
            />
            <FontAwesomeIcon
              className={classes.star}
              size="lg"
              icon={faStar}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
