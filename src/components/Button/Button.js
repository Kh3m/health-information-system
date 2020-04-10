import React from "react";
import classes from "./Button.module.css";

export const Button = ({ type, text,...others}) => {
  switch (type) {
    case "Login":
      return (
        <button className={[classes.button_link, classes.Login].join(" ")} {...others}>
          {text}
        </button>
      );
    case "InfoBtn":
      return (
        <button className={[classes.button_link, classes.InfoBtn].join(" ")} {...others}>
          {text}
        </button>
      );
    default:
      return type;
  }
};
