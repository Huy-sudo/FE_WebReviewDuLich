import React from "react";
import classes from "./CityPicker.module.css";

function CityPicker(props) {
  let fakeCity = [
    {
      name: "Nha Trang",
    },
    {
      name: "Đồng Nai",
    },
    {
      name: "Hồ Chí Minh",
    },
    {
      name: "Nha Trang",
    },
  ];
  return (
    <div className={classes.wrapper}>
      <label htmlFor="city" className={classes["label-city"]}>Chọn tỉnh/thành phố <span style={{color: "red"}}>*</span></label>
      <select id="city" defaultValue="Tất cả" required className={classes.select}>
        {fakeCity.map((city) => {
          return <option value={city.name}>{city.name}</option>;
        })}
      </select>
    </div>
  );
}

export default CityPicker;
