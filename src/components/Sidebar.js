import React from "react";
import { Link } from "react-router-dom";
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
            <ListItem button>
              <ListItemIcon>
                <AccountCircle style={{ fontSize: "40px" }} />
              </ListItemIcon>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Typography variant='h1' style={{ fontSize: "2rem" }}>
                  Demo Admin
                </Typography>
                <Typography variant='subtitle2'>Administrator</Typography>
              </div>
            </ListItem>
          </List>
        </div>
        {/* drawer items */}
        <div className={style.drawerItems}>
          <Buttons />
        </div>
      </Drawer>
    </div>
  );
}

export default SideBar;
