import React from "react";
import classes from "./Dashboard.module.css";

// const Details = [
//   {
//     brief: "0803-191-5694",
//     heading: "EMERGENCY SERVICE", 
//     btnCaption: "See More",
//     detail:
//       "Folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. Organizations can use folders to group projects under the organization node in a hierarchy.",
//   },
//   {
//     brief: "fa fa-calendar-o",
//     heading: "DO YOU WANT TO MAKE AN APPOINTMENT",
//     btnCaption: "See More",
//     detail:
//       "Folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. Organizations can use folders to group projects under the organization node in a hierarchy.",
//   },
//   {
//     brief: "fa fa-handshake-o",
//     heading: "About Us",
//     btnCaption: "See More",
//     detail:
//       "Folders are nodes in the Cloud Platform Resource Hierarchy. A folder can contain projects, other folders, or a combination of both. Organizations can use folders to group projects under the organization node in a hierarchy.",
//   },
// ];

function Dashboard() {
  return (
    <div>
      <div className={classes.banner_wrapper}>
        <div className={classes.banner_message}>
          <h2>Welcome to</h2>
          <h2>National Health information System</h2>
          <h3>a centralized system for health information records</h3>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Dashboard;
