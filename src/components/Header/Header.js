import React from "react";

// Style
import classes from "./Header.module.css";

const header = () => {
    
    return (
        <header className="Header">
            <div className="">
            <a href="/" className={classes.logo}></a>
            </div>
            <ul className={classes.nav}>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Contact Us</a></li>
            </ul>
        </header>
    );
}

export default header;