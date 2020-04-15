import React from "react";
import { AppBar, Typography } from "@material-ui/core";

function Footer({ footer }) {
  return (
    <AppBar className={footer}>
      <Typography>
        Health Information System, Nigeria - Copyright &copy; 2020
      </Typography>
      <Typography>version 2.0.0</Typography>
    </AppBar>
  );
}

export default Footer;
