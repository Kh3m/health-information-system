import React from "react";

import classes from "./Infos.module.css";

// Custom components
import Info from "./Info/Info";

const infos = ( props ) => {
    return (
        <section className={classes.Infos}> 
            {
                props.infos.map( (info, index) => {
                    return <Info brief={info.brief}
                        heading={info.heading}
                        detail={info.detail}
                        btnCaption={info.btnCaption}
                        key={info.heading + index} />
                })
            }            
        </section>
    );
    
}

export default infos;