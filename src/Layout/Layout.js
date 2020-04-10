import React, { useState } from "react";
import { BrowserRouter, Route} from "react-router-dom"

import classes from "./Layout.module.css";


import Navbar from "../UI/Header/Header";
import Dashboard from "../UI/Dashboard/Dashboard";


function Layout(props){
  const [ show, setShow ] = useState(false);
  const handleHeaderShadow = () => {
    if (document.body.scrollTop >= 10){
      setShow(true)
    }
      setShow(false)
   }
  return (
    <React.Fragment>
      <Navbar showShadow={show} />
      <main className={classes.main} onScroll={handleHeaderShadow}>
        <BrowserRouter>
          <Route path="/" component={Dashboard}/>
        </BrowserRouter>
      </main>
    </React.Fragment>
  );
};

export default Layout;
