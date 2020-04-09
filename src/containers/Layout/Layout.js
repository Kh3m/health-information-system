
import React, { useState, useEffect } from "react";

import { Route } from "react-router-dom";

// Styles
import classes from "./Layout.module.css";

// Custom component imports
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import HIS from "../../containers/HIS/HIS";
import Account from "../Account/Account";

const Layout = ( props ) => {
    // header shadow state
    const [headerShadowState, setHeaderShadowState] = useState(false);
    useEffect(() => {
      // check the scolltop value
      window.addEventListener("scroll", () => {
        if(document.body.scrollTop >= 100 || 
          document.documentElement.scrollTop >= 100) {
          setHeaderShadowState(true);
        } else {
          setHeaderShadowState(false);
        }
      });
    });

    return (
      <React.Fragment>
        <Header headerShadow={headerShadowState}/> 
          <main className={classes.Main}>
            <Route path="/" exact component={HIS} />
            <Route path="/account" component={Account} />
          </main>
        <Footer />          
      </React.Fragment>
    );
}

export default Layout;