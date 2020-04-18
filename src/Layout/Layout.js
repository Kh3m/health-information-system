import React, { useState } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";


import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

import Navbar from "../components/Header";
import Dashboard from "../UI/Dashboard/Dashboard";
import Hospitals from "../UI/Hospitals/Hopistal";
import Home from "../UI/Home";
import Form from "../auth/Login";
import Footer from "../components/Footer";

import * as actions from "../store/actions/index";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  content: {
    width: "100%",
    overflowX: "hidden",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginTop: "66px",
  },
  contentShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
  contentDetails: {
    marginLeft: drawerWidth,
  },
  footer: {
    position: "static",
    height: theme.spacing(10),
    top: "auto",
    bottom: 0,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
}));

function Layout(props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };
  const [openModal, setModal] = useState(false);

  const handleModalOpen = () => {
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const style = useStyles();

  // guide routes
  let routes = (
    <React.Fragment>
      <Route path='/' exact>
        <Home LoginClick={handleModalOpen} />
      </Route>
      {/* redirect to home if user try to goto dashboard without logging in */}
      <Redirect from="/dashboard" to="/"/>      
    </React.Fragment>
  );

  if(props.userData) {
    routes = (
      <React.Fragment>
        <Route path='/' exact>
          <Home LoginClick={handleModalOpen} />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path="/hospitals">
          <Hospitals />
        </Route>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar
          userData={props.userData}
          openDrawer={openDrawer}
          openLogin={openModal}
          handleLogin={handleModalOpen}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
          logOut={props.onLogOutHandler}
        />
        <main
          className={clsx(style.content, { [style.contentShift]: openDrawer })}>
          <Switch>
            {routes}
          </Switch>
          {/** 
           * Redirect on successful sign in or sign up
           */}
          {props.userData ? <Redirect to="/dashboard" /> : <Form openModal={openModal} handleModalClose={handleModalClose} />}
        </main>
        <Footer
          footer={clsx(
            style.content,
            { [style.contentShift]: openDrawer },
            style.footer
          )}
        />
      </BrowserRouter>
    </React.Fragment>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.auth.authData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogOutHandler: () => dispatch(actions.authLogout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
