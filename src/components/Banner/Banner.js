import React from "react";

// style
import classes from "./Banner.module.css";

const banner = () => {
    return (
        <div className={classes["banner-wrapper"]}>
            <div className={classes.banner}>
            <p className={classes.greet}>Welcome to</p>
            <p className={classes.title}>National health information system</p>
            <p className={classes.description}>A centralized system for health information records</p>
            <button className={classes["btn-dark"]}><a href="#">LOGIN</a></button>
            </div>
            <div className={classes.banner}></div>
            <div className={classes["banner-bottom"]}>
            <div className={classes["no-hospital"]} id="hospitals">234 HOSPITALS</div>
            <div className={classes["no-doctor"]} id="doctors">2568 DOCTORS</div>
            <div className={classes["no-patient"]} id="users">5m USERS</div>
            </div>
        </div>
    )
}

export default banner;
