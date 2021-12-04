import { Select } from "antd";
import React, { useState } from "react";
import classes from "./FilterTime.module.css";

const { Option } = Select;

function FilterTime() {
  const [selectedTime, setSelectedTime] = useState("");

  function selectedTimeHandler(event) {
      setSelectedTime(event.target.value);
  }

  return (
    <Select
      className={classes["filter-time"]}
      allowClear
      placeholder="Thời gian"
      defaultValue=""
      onChange={selectedTimeHandler}
      size="large"
      value={selectedTime}
    >
      <Option className={classes.option}>Mới nhất</Option>
      <Option className={classes.option}>Cũ nhất</Option>
    </Select>
  );
}

export default FilterTime;
