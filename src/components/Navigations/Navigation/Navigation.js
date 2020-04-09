import React from "react";
import { NavLink } from "react-router-dom";

// Styles
import classes from "./Navigation.module.css";

const navigation = ( props ) => {
    return (
        <li className={classes.Navigation}>
          <NavLink to={props.to} activeClassName={classes.active} exact>{props.children}</NavLink>
        </li>
    )
}

export default navigation;