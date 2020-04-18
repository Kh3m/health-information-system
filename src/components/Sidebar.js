import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
  makeStyles,
  Drawer,
  Divider,
  useTheme,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  // ListItemText,
  Typography,
} from "@material-ui/core";
import { ChevronLeft, ChevronRight, AccountCircle } from "@material-ui/icons";

import { Buttons } from "./Custom/Sidebuttons";
import headerLogo from "../assets/images/logow.png";
import Login from "../auth/Login";

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
      color: "black",
    },
  },
  HISLogo: {
    width: "80px",
    position: "relative",
    left: "17px",
    top: "8px",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerItems: {
    fontSize: "3rem",
  },
}));


function SideBar(props) {
  // make signin in sidebar open form modal
  const [openLoginForm, setOpenLoginForm] = useState(false);
  const openLoginFormHandler = () => {
    setOpenLoginForm(true);
  }
  const closeLoginFormHandler = () => {
    setOpenLoginForm(false);
  }

  const { classes, width, open, handleDrawerClose } = props;
  const style = useStyles();
  const theme = useTheme();
  return (
    <div>
      <Drawer
        open={open}
        variant='persistent'
        anchor='left'
        className={width}
        classes={classes}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "200px" }}>
            <Link to="./"  onClick={handleDrawerClose}>
              <img
                src={headerLogo}
                className={style.HISLogo}
                alt='header_icon'
              />
            </Link>
          </div>
          <div className={style.drawerHeader}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeft fontSize='large' />
              ) : (
                <ChevronRight fontSize='large' />
              )}
            </IconButton>
          </div>
        </div>
        <Divider />
        {/* user profile */}
        <div>
          <List>
            <ListItem button onClick={openLoginFormHandler}>
              <ListItemIcon>
                <AccountCircle style={{ fontSize: "40px" }} />
              </ListItemIcon>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='h1' style={{ fontSize: "2rem" }}>
                  {props.userData ? props.userData.email : "Sign In"}
                </Typography>
                <Typography variant='subtitle2'>{props.userData ? "propsAdministrator" : "Access Your Profile"}</Typography>
              </div>
            </ListItem>
          </List>
          {/** 
           * Redirect on successful sign in or sign up
           */}
          {props.userData ? <Redirect to="/dashboard" /> : <Login openModal={openLoginForm} handleModalClose={closeLoginFormHandler}/>}
        </div>
        {/* drawer items */}
        <div className={style.drawerItems}>
          <Buttons userData={props.userData} logOut={props.logOut}/>
        </div>
      </Drawer>
    </div>
  );
}

export default SideBar;
