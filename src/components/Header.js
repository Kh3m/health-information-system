import React, { useState } from "react";
import clsx from "clsx";

import {
  AppBar,
  IconButton,
  Toolbar,
  makeStyles,
  // Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { AccountCircle, Menu as MenuIcon } from "@material-ui/icons";
import SideBar from "./Sidebar";
import Login from "../auth/Login";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  app: {
    flexGrow: 2,
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appToolbar: {
    justifyContent: "space-between",
  },
  iconSize: {
    fontSize: "30px",
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  hide: {
    display: "none",
  },
  userAccount: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-end",
  },
}));

function Navbar(props) {
  const {
    openLogin,
    handleLogin,
    openDrawer,
    handleDrawerClose,
    handleDrawerOpen,
  } = props;

  // open login form
  const [openModal, setOpenModal] = useState(false);

  // close modal
  const modalCloseHandler = () => {
    setOpenModal(false);
  }

  // open user account menu
  const [openMenu, setOpenMenu] = useState(null);

  // When clicked open userAccount menu
  const handleAccountMenuOpen = (event) => {
    setOpenMenu(event.currentTarget);
  };
  const handleAccountMenuClose = () => {
    setOpenMenu(null);
    if(props.userData) {
      // signout instead
      props.logOut();
    } else {
      setOpenModal(true);      
    }
    setOpenModal(true);
  };

  const style = useStyles();
  return (
    <div className={style.root}>
      <div className={style.app}>
        <AppBar
          position='fixed'
          className={clsx(style.appBar, { [style.appBarShift]: openDrawer })}>
          <Toolbar className={style.appToolbar}>
            <IconButton
              edge='start'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              className={clsx(openDrawer && style.hide)}>
              <MenuIcon className={style.iconSize} />
            </IconButton>
            {/* user Account */}
            <div className={style.userAccount}>
              {true ? (
                <React.Fragment>
                  <IconButton
                    aria-label='account of current user'
                    onClick={handleAccountMenuOpen}>
                    <AccountCircle className={style.iconSize} />
                  </IconButton>
                  <Menu
                    anchorEl={openMenu}
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={Boolean(openMenu)}
                    onClose={handleAccountMenuClose}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem onClick={handleAccountMenuClose}>
                      {props.userData ? "Sign out" : "Sign In"}
                    </MenuItem>
                  </Menu>
                  {props.userData ? null : <Login openModal={openModal} handleModalClose={modalCloseHandler} />}
                </React.Fragment>
              ) : (
                <Button
                  size='large'
                  variant='contained'
                  color='primary'
                  onClick={handleLogin}>
                  Login
                </Button>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
      {/* sidebar */}
      <SideBar
        open={openDrawer}
        width={style.drawer}
        classes={{ paper: style.drawerPaper }}
        handleDrawerClose={handleDrawerClose}
        userData={props.userData}
        logOut={props.logOut}
      />
    </div>
  );
}

export default Navbar;
