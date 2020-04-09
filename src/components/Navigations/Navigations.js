import React from "react";

// Styles
import classes from "./Navigations.module.css";

// Custome components 
import Navigation from "./Navigation/Navigation";

const navigations = () => {
    return (
        <ul className={classes.Navigations}>
            <Navigation to="/">Home</Navigation>
            <Navigation to="/about/us">About Us</Navigation>
            <Navigation to="/contact/us">Contact Us</Navigation>
        </ul>
    )
}

export default navigations;