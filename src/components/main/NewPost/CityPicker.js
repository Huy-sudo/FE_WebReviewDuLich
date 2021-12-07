import React from "react";
import classes from "./CityPicker.module.css";

function CityPicker(props) {
  let city = props.data.city;
  function cityChangeHandler(event) {
    props.onSaveData(event.target.value);
  }

  return (
    <div className={classes.wrapper}>
      <label htmlFor="city" className={classes["label-city"]}>
        Chọn tỉnh/thành phố <span style={{ color: "red" }}>*</span>
      </label>
      <select
        id="city"
        required
        className={classes.select}
        onChange={cityChangeHandler}
      >
        <option value="" selected style={{ display: "none" }}></option>
        {city.map((city) => {
          return <option value={city.ID}>{city.name}</option>;
        })}
      </select>
    </div>
  );
}

export default CityPicker;
