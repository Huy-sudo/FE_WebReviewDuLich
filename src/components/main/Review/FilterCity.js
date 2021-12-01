import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";
import classes from "./FilterCity.module.css";

const {Option} = Select;

function FilterCity(props) {
  let [cities, setCities] = useState([]);
  let [selectedCity, setSelectedCity] = useState('');
  
  useEffect(() => {
    async function getCities() {
      try {
        let response = await axios.get("http://localhost:8000/api/city/"); //URL
        setCities(response.data)
        console.log(response);
      } catch (error) {}
    }
    getCities();
  }, []);

  function selectedCityHandler(value) {
    setSelectedCity(value);
    props.onGetCity(selectedCity);
  }

  return (
    <div>
      <Select 
      className={classes["filter-cities"]}
      allowClear
      placeholder="Thành phố"
      defaultValue="Tất cả"
      onChange={selectedCityHandler}
      value={selectedCity}
      >
        <Option value="Tất cả" selected>Tất cả</Option>
        {cities.map(city => {
            return <Option key={city.id} value={city.name}>{city.name}</Option>
        })}
      </Select>
    </div>
  );
}

export default FilterCity;
