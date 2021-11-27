import React, { useEffect, useState } from "react";
import axios from "axios";

function Filter() {
  let [cities, setCities] = useState([]);

  let selectedCity = document.getElementById('cities');
  
  useEffect(() => {
    async function getCities() {
      try {
        let response = await axios.get(""); //URL
        setCities(response.data);
      } catch (error) {}
    }
    getCities();
  }, []);


  return (
    <div>
      <select name="Thành Phố" id="cities">
        <option value="Tất cả" selected>Tất cả</option>
        {cities.map(city => {
            return <option key={city.id} value={city.name}>{city.name}</option>
        })}
      </select>
    </div>
  );
}

export default Filter;
