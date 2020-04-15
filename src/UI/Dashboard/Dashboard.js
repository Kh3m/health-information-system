import React from "react";
import { Link } from "react-router-dom";

import {
  makeStyles,
  Typography,
  Box,
  Grow,
  Breadcrumbs,
} from "@material-ui/core";
import { DashboardList } from "../../components/Card";

import { PermIdentity, Home } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(53),
  },
  dashboardList: {
    padding: 0,
  },
  dashboardItem: {
    width: theme.spacing(25),
    margin: theme.spacing(2),
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
  link: {
    display: "flex",
  },
  breadcrumbs: {
    margin: theme.spacing(2, 2, 0, 0)
  }
}));

const Details = ({ icon, label, number, color }) => {
  const style = useStyles();
  return (
    <DashboardList
      className={style.dashboardItem}
      classes={style.dashboardList}
      elevation={5}>
      <div style={{ display: "flex" }}>
        <div style={{ background: color, marginRight: "12px" }}>{icon}</div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "6px",
          }}>
          <Typography variant='h4'>{label}</Typography>
          <Typography variant='h4'>{number}</Typography>
        </div>
      </div>
    </DashboardList>
  );
};

function Dashboard(props) {
  const style = useStyles();
  return (
    <Box className={style.root}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant='h2' style={{ padding: "12px" }}>
          Dashboard
        </Typography>
        <Breadcrumbs separator='/' aria-label='breadcrumb' className={style.breadcrumbs}>
          <Link to='./hospitals' className={style.link}>
            <Home className={style.icon}/>
              Home
          </Link>
          <Link to='./dashboard'>
              Dashboard
          </Link>
        </Breadcrumbs>
      </div>
      <Grow
        in={true}
        style={{ transformOrigin: "0 0 0 0" }}
        {...(true ? { timeout: 500 } : {})}>
        <Box style={{ display: "flex", flexWrap: "wrap" }}>
          {/* dashboard details */}
          {details.map(({ icon, label, number, color }) => (
            <Details
              key={color}
              label={label}
              number={number}
              color={color}
              icon={icon}
            />
          ))}
        </Box>
      </Grow>
    </Box>
  );
}

const details = [
  {
    icon: <PermIdentity style={{ fontSize: "70", color: "white" }} />,
    label: "Doctors",
    number: "8",
    color: "blue",
  },
  {
    icon: <PermIdentity style={{ fontSize: "70", color: "white" }} />,
    label: "Nurses",
    number: "8",
    color: "yellow",
  },
  {
    icon: <PermIdentity style={{ fontSize: "70", color: "white" }} />,
    label: "THEATER",
    number: "8",
    color: "gray",
  },
  {
    icon: <PermIdentity style={{ fontSize: "70", color: "white" }} />,
    label: "LABORATORIES",
    number: "6",
    color: "green",
  },
  {
    icon: <PermIdentity style={{ fontSize: "70", color: "white" }} />,
    label: "PATIENTS",
    number: "7",
    color: "purple",
  },
  {
    icon: <PermIdentity style={{ fontSize: "70", color: "white" }} />,
    label: "PHARMACIST",
    number: "8",
    color: "pink",
  },
  {
    icon: <PermIdentity style={{ fontSize: "70", color: "white" }} />,
    label: "MEDICINES",
    number: "10",
    color: "orange",
  },
  {
    icon: <PermIdentity style={{ fontSize: "70", color: "white" }} />,
    label: "BEDS",
    number: "20",
    color: "brown",
  },
];

export default Dashboard;
