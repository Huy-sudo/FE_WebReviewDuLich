import React from "react";
import classes from "./PlacePicker.module.css";

function PlacePicker(props) {
  let places = props.data;
  console.log(props.data);

  function placeChangeHandler(event) {
    props.onSaveData(event.target.value);
  }
  return (
    <div className={classes.wrapper}>
      <label htmlFor="place" className={classes["label-place"]}>
        Chọn địa điểm <span style={{ color: "red" }}>*</span>
      </label>
      <select
        id="place"
        required
        className={classes.select}
        onChange={placeChangeHandler}
      >
        <option value="" selected style={{ display: "none" }}></option>
        {places.map((place) => {
          return <option value={place.ID}>{place.name}</option>;
        })}
      </select>
    </div>
  );
}

export default PlacePicker;
