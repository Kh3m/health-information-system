import React from "react";

// style
import classes from "./Banner.module.css";

// Custom components
import Button from "../UI/Button/Button";

const banner = () => {
    return (
        <div
            className={classes["banner-wrapper"]}>
            <div className={classes["banner-message"]}>
                <h2>Welcome to</h2>
                <h2>National Health information System</h2>
                <h3>a centralized system for health information records</h3>
                <Button>More...</Button>
            </div>
            <div></div>
      </div>
    )
}

export default banner;
