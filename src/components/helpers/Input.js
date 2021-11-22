import React from "react";
import classes from "./Input.module.css";

function Input(props) {
  return (
    <input
      className={`${classes.input} ${props.className}`}
      type={props.type}
      id={props.id}
      htmlFor={props.htmlFor}
      onChange={props.onChange}
      onBlur={props.onBlur}
      placeholder={props.placeholder}
      value={props.value}
      disabled={props.disabled}
    ></input>
  );
}

export default Input;
