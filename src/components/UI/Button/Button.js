import React from "react";

// Style
import classes from "./Button.module.css";

const button = ( props ) => {
    
    const btnClasses = [classes["button-link"]];
    if(props.children.toLowerCase() === "login") {
        btnClasses.push(classes.Login);
    } else {
        btnClasses.push(classes.InfoBtn);
    }
    
    return (
        <button className={btnClasses.join(" ")}>
            {props.children}
        </button>
    );
}

export default button;