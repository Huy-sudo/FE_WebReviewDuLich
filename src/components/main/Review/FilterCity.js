import React, { useEffect, useState } from "react";
import { Select } from "antd";
import axios from "axios";
import classes from "./FilterCity.module.css";

const {Option} = Select;

function FilterCity() {
  let [cities, setCities] = useState([]);
  let [selectedCities, setSelectedCities] = useState([]);

  
  useEffect(() => {
    async function getCities() {
      try {
        let response = await axios.get("http://localhost:8000/api/city/"); //URL
        //setCities(response.data)
        console.log(response);
      } catch (error) {}
    }
    getCities();
  }, []);


  function selectedCityHandler(value) {
    setSelectedCities(value);
  }

  return (
    <div>
      <Select 
      className={classes["filter-cities"]}
      mode="multiple"
      allowClear
      placeholder="Thành phố"
      defaultValue="Tất cả"
      onChange={selectedCityHandler}
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
