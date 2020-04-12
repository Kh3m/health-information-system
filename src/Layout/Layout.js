import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

import Navbar from "../components/Header";

import Dashboard from "../UI/Dashboard/Dashboard";
import Home from "../UI/Home";
import Form from "../containers/login/Login";
import Footer from "../components/Footer";

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
    height: theme.spacing(20),
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
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar
          openDrawer={openDrawer}
          openLogin={openModal}
          handleLogin={handleModalOpen}
          handleDrawerClose={handleDrawerClose}
          handleDrawerOpen={handleDrawerOpen}
        />
        <main
          className={clsx(style.content, { [style.contentShift]: openDrawer })}>
          <Switch>
            <Route path='/' exact>
              <Home LoginClick={handleModalOpen} />
            </Route>
            <Route path='/dashboard'>
              <Dashboard />
            </Route>
          </Switch>
          <Form openModal={openModal} handleModalClose={handleModalClose} />
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

export default Layout;
