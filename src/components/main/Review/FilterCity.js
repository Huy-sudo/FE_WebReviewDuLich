import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";
import classes from "./FilterCity.module.css";

const { Option } = Select;

function FilterCity(props) {
  let [cities, setCities] = useState([]);
  let [selectedCity, setSelectedCity] = useState("");

  function selectedCityHandler(value) {
    setSelectedCity(value);
    props.onGetCity(selectedCity);
  }

  return (
      <Select
        className={classes["filter-city"]}
        allowClear
        placeholder="Thành phố"
        defaultValue="Tất cả"
        onChange={selectedCityHandler}
        size="large"
        value={selectedCity}
      >
        <Option className={classes.option} value="Tất cả" selected>
          Tất cả
        </Option>
        {cities.map((city) => {
          return (
            <Option className={classes.option} key={city.id} value={city.name}>
              {city.name}
            </Option>
          );
        })}
      </Select>
  );
}

export default FilterCity;
