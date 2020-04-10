import React from "react";

// style
import classes from "./Banner.module.css";

// Custom components
// import Button} from "../Button/Button";

const banner = ( props ) => {
    let bannerMessage = null;
    if(props.showBannerMessage) {
        bannerMessage = (
            <div className={classes["banner-message"]}>
                <h2>Welcome to</h2>
                <h2>National Health information System</h2>
                <h3>a centralized system for health information records</h3>
                {/* <Button>More...</Button> */}
            </div>            
        );
    }
    return (
        <div className={classes["banner-wrapper"]}>
            {bannerMessage}
        </div>
    )
}

export default banner;
