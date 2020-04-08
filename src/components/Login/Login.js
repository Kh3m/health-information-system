import React, { useState } from "react";
import classes from "./Login.module.css";
import Logo from "../../assets/images/logow.png";
import Input from "../UI/Input";

const Login = () => {
  return (
    <div className={classes.container} style={{ marginTop: "50px" }}>
      <h3 className={classes["page-label"]}>Patient Sign in</h3>

      <div className={classes["flex-wrapper"]}>
        <div className={classes["login-wrapper"]}>
          <a href="#">
            <img src={Logo} alt="logo" width="80px" />
          </a>

          <h2>Sign in</h2>
          <h3>to access your HIS account</h3>
          <form action="#" method="POST">
            <Input
              type="email"
              placeholder="Email address"
              name="email"
              title="Email address"
              className={classes["input-label"]}
            />

            <Input
              type="password"
              placeholder="Password"
              name="password"
              title="Password"
              className={classes["input-label"]}
            />
            <a className={classes.forget} href="#">
              Forget password
            </a>
            <input type="submit" value="Login" name="patient_login" />
          </form>

          <span className={classes["copy-right"]}>
            health information system, Nigeria - Copyright &copy; 2020
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
