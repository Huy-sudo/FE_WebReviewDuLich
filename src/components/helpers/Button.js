import React from "react";
import classes from "./Button.module.css";

function Button(props) {

  return (
    <button
      className={`${classes.button} ${props.className}`}
      id={props.id}
      type={props.type}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}

    >
      {props.children}
    </button>
  );
}

export default Button;
