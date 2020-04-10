import React from "react";
import { NavLink } from "react-router-dom";

// Style
import classes from "./Header.module.css";

// Custom components
import HISLogo from "../../components/HISLogo/HISLogo";
import { Button } from "../../components/Button/Button";
import Navigations from "../../components/Navigations/Navigations";

function Navbar(props) {
  const headerClasses = [classes.Header];
  if (props.headerShadow) {
    headerClasses.push(classes.HeaderShadow);
  }

  return (
    <header className={headerClasses.join(" ")} onScroll={props.onScroll}>
      <HISLogo />
      <Navigations />
      <NavLink to='/account/login' exact activeClassName={classes.active}>
        <Button type='Login' onClick={props.loginClick} text='Login' />
      </NavLink>
    </header>
  );
}

export default Navbar;
