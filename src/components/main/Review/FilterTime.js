import React, { useState } from "react";
import classes from "./FilterTime.module.css";

function FilterTime() {
  const [selectedTime, setSelectedTime] = useState("");

  function selectedTimeHandler(event) {
    setSelectedTime(event.target.value);
  }

  return (
    <div className={classes.wrapper}>
      <select
        id="city"
        className={classes["filter-time"]}
        defaultValue="Mới nhất"
        onChange={selectedTimeHandler}
        size="large"
        value={selectedTime}
      >
        <option className={classes.option}>Mới nhất</option>
        <option className={classes.option}>Cũ nhất</option>
      </select>
    </div>
  );
}

export default FilterTime;
