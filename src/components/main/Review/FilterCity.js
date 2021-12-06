import React from "react";
import classes from "./FilterCity.module.css";


function FilterCity(props) {

  function selectedCityHandler(event) {
    props.onGetCity(event.target.value);
  }

  let cities = props.data;
  return (
      <select
        className={classes["filter-city"]}
        placeholder="Thành phố"
        onChange={selectedCityHandler}
        size="large"
        defaultValue=""
      >
        <option className={classes.option} value={""}>
          Tất cả
        </option>
        {cities.map((city) => {
          return (
            <option className={classes.option} key={city.ID} value={city.ID}>
              {city.name}
            </option>
          );
        })}
      </select>
  );
}

export default FilterCity;
