import React from "react";

// Styles
import classes from "./HISIntro.module.css";

// Custom components
// import Button from "../Button/Button";

const hisIntro = ( props ) => {
    return (
        <div className={classes.HISIntro}>
        <h2>{props.heading}</h2>
        <p>
          Folders are nodes in the Cloud Platform Resource Hierarchy. A folder
          can contain projects, other folders, or a combination of both.
          Organizations can use folders to group projects under the organization
          node in a hierarchy.
        </p>
        {/* {props.btn? <Button>How to get started </Button>: null} */}
      </div>
    );
}

export default hisIntro;