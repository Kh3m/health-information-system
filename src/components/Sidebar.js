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
import {
  ChevronLeft,
  ChevronRight,
  Dashboard,
  AccountCircle,
  AccessibleForward,
  Info,
  ContactSupport,
  Edit,
  AttachMoney,
  Person,
} from "@material-ui/icons";

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
            <img src={headerLogo} className={style.HISLogo} alt='header_icon' />
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
          <List>
            {buttons.map(({ icon, label, link }) => (
              <Link to={link} key={label}>
                <ListItem button>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <Typography variant='h5'>{label}</Typography>
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  );
}

const buttons = [
  {
    icon: <Dashboard style={{ fontSize: "30px" }} />,
    label: "DashBoard",
    link: "./dashboard",
  },
  {
    icon: <AccessibleForward style={{ fontSize: "30px" }} />,
    label: "Patients",
    link: "/",
  },
  { icon: <Person style={{ fontSize: "30px" }} />, label: "User Mgmt" },
  { icon: <AttachMoney style={{ fontSize: "30px" }} />, label: "Finance Mgmt" },
  { icon: <Edit style={{ fontSize: "30px" }} />, label: "Edit Profile" },
  { icon: <Info style={{ fontSize: "30px" }} />, label: "About us" },
  { icon: <ContactSupport style={{ fontSize: "30px" }} />, label: "Contact" },
];

export default SideBar;
