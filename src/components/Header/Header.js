import React from "react";
import { NavLink } from "react-router-dom";

// Style
import classes from "./Header.module.css";

// Custom components
import HISLogo from "../HISLogo/HISLogo";
import Button from "../UI/Button/Button";
import Navigations from "../Navigations/Navigations";

const header = ( props ) => {
  const headerClasses = [classes.Header];
  // Show box shadow when the user has scroll 100px top
  if(props.headerShadow) {
    headerClasses.push(classes.HeaderShadow);
  }

  return (
    <header className={headerClasses.join(" ")}>
      <HISLogo />
      <Navigations />
      <NavLink to="/account/login" exact activeClassName={classes.active}>
        <Button loginClick={props.loginClick}>Login</Button>
      </NavLink>
    </header>
  );
};

export default header;
