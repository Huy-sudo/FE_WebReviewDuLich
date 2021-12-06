import React, { useState } from "react";
import classes from "./FilterCity.module.css";


function FilterCity(props) {
  let [cities, setCities] = useState([]);
  let [selectedCity, setSelectedCity] = useState("");

  function selectedCityHandler(value) {
    setSelectedCity(value);
    props.onGetCity(selectedCity);
  }

  return (
      <select
        className={classes["filter-city"]}
        allowClear
        placeholder="Thành phố"
        defaultValue="Tất cả"
        onChange={selectedCityHandler}
        size="large"
        value={selectedCity}
      >
        <option className={classes.option} value="Tất cả" selected>
          Tất cả
        </option>
        {cities.map((city) => {
          return (
            <option className={classes.option} key={city.id} value={city.name}>
              {city.name}
            </option>
          );
        })}
      </select>
  );
}

export default FilterCity;
