import React from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";
import { Button } from "../../components/Button/Button";
import headerLogo from "../../assets/images/logow.png";

function Navbar(props) {
  const headerClasses = [classes.Header];
  if (props.showShadow) {
    headerClasses.push(classes.HeaderShadow);
  }

  return (
    <header className={headerClasses.join(" ")}>
      <div className={classes.HISLogo}>
        <img src={headerLogo}></img>
      </div>
      <div className={classes.Navigations}>
        <ul className={classes.Navigation}>
          <li>
            <Link to="/" >Home</Link>
          </li>
          <li>
            <Link to='./About'>About US</Link>
          </li>
          <li>
            <Link to='./contact'>Contact US</Link>
          </li>
        </ul>
      </div>
      <div className={classes.button}>
        <Button type='Login' onClick={props.loginClick} label='Login' />
      </div>
    </header>
  );
}

export default Navbar;
