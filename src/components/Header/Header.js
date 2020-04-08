import React from "react";

// Style
import classes from "./Header.module.css";

// Custom components
import HISLogo from "../HISLogo/HISLogo";
import Button from "../UI/Button/Button";

const header = () => {
  return (
    <header className={classes.Header}>
      <HISLogo />
      <ul className={classes.nav}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About Us</a>
        </li>
        <li>
          <a href="#">Contact Us</a>
        </li>
      </ul>
      <a href="/patient/login.html">
        <Button>Login</Button>
      </a>
    </header>
  );
};

export default header;
