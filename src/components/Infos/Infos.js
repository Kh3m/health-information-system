import React from "react";

import classes from "./Infos.module.css";

// Custom components
import Info from "./Info/Info";

const infos = ( props ) => {
    return (
        <section className={classes.Infos}> 
            {
                props.infos.map( (info) => {
                    return <Info brief={info.brief}
                        heading={info.heading}
                        detail={info.detail}
                        btnCaption={info.btnCaption}/>
                })
            }            
        </section>
    );
    
}

export default infos;