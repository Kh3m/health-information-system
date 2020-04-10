import React from "react";
import { Route } from "react-router-dom";
import classes from "./Account.module.css";
import Login from "../../UI/Login/Login";

function Account(){
  return (
    <div className={classes.Account} style={{ marginTop: "50px" }}>
      <Route path="/account/login" component={Login} />
    </div>
  );
};

export default Account;
