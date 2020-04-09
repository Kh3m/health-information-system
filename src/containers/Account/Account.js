import React from "react";
import { Route } from "react-router-dom";

import classes from "./Account.module.css";
import Banner from "../../components/Banner/Banner";
import Registeration from "../../components/Registration/Registration";
import Login from "../../components/Login/Login";

const account = () => {
  return (
    <div className={classes.Account} style={{ marginTop: "50px" }}>
      {/* <Banner showBannerMessage={false} /> */}
      <Route
        path="/account/register"
        render={() => <Registeration role="Register Doctor" />}
      />
      <Route path="/account/login" component={Login} />
    </div>
  );
};

export default account;
