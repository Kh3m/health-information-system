import React from "react";

import { Route } from "react-router-dom";
import classes from "./Layout.module.css";



import HIS from "../../containers/HIS/HIS";
import Account from "../Account/Account";

const Layout = props => {
  return (
    <React.Fragment>
      <main className={classes.Main}>
        <Route path="/" exact component={HIS} />
        <Route path="/account" component={Account} />
      </main>
    </React.Fragment>
  );
};

export default Layout;
