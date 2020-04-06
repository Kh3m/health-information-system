
import React from "react";

// Styles
import classes from "./HISLogo.module.css";

// Image
import Logo from "../../assets/images/logo.png";

const hisLogo = () => {
    return (
        <div class={classes.HISLogo}>
            <a href="/index.html"><img src={Logo} alt="logo"/></a>
        </div>
    )
}

export default hisLogo;