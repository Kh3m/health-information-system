import React from "react";
import classes from "./Button.module.css";

export const Button = ({ type, label,...others}) => {
  switch (type) {
    case "Login":
      return (
        <button className={[classes.button_link, classes.Login].join(" ")} {...others}>
          {label}
        </button>
      );
    case "InfoBtn":
      return (
        <button className={[classes.button_link, classes.InfoBtn].join(" ")} {...others}>
          {label}
        </button>
      );
    default:
      return type;
  }
};
