import React from "react";
import classes from "./Info.module.css";

// Custom component
import { Button } from "../../Button/Button";

const info = ( props ) => {
    const briefs = [classes.BriefDefault];
    let briefText = props.brief;
    if(props.brief.startsWith("fa")) {
        // push it to the briefs classes
        briefs.push(props.brief);
        // remove it from the displayed text
        briefText = "";
    } else {
        briefs.push(classes.Brief);
    }

    return (
        <div className={classes.Info}>
            <div>
                <span className={briefs.join(" ")}>{briefText}</span>
                <h3>{props.heading}</h3>
                <p>{props.detail}</p>
                <Button type="InfoBtn" label="Preview"/>
            </div>
        </div>
    )
}

export default info;