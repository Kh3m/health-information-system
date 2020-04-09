import React from "react";
import classes from "./Login.module.css";
import Logo from "../../assets/images/logow.png";
import Input from "../UI/Input/Input";

import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className={classes.container} style={{ marginTop: "50px" }}>
      
      
      <h3 className={classes["page-label"]}>Patient Sign in</h3>

      <div className={classes["flex-wrapper"]}>
        <div className={classes["login-wrapper"]}>
          <Link to="/">
            <img src={Logo} alt="logo" width="80px" />
          </Link>

          <h2>Sign in</h2>
          <h3>to access your HIS account</h3>
          <form>
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
            <Link className={classes.forget} to="/account/login/forget">
              Forget password
            </Link>
            <input type="submit" value="Login" name="patient_login" />
          </form>
          <span className={classes["copy-right"]}>
            <p>
              Don't have an account? 
              <Link to="/account/register"> Register </Link>
            </p>

            health information system, Nigeria - Copyright &copy; 2020
          </span>
        </div>
      </div>

    </div>
  );
};

export default login;
