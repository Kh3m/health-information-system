import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
} from "@material-ui/core";
import {
  Dashboard,
  AccessibleForward,
  Info,
  ContactSupport,
  Edit,
  AttachMoney,
  Person,
  LocalHospital,
  InsertInvitation,
  ExpandMore,
  ArrowBackIos,
  RadioButtonUncheckedOutlined,
  Cancel,
  StayPrimaryLandscapeOutlined
} from "@material-ui/icons";

export const Buttons = ( props ) => {
  const [expand, setExpand] = useState({
    user: false,
    hospital: false,
  });
  const handleExpand = (type) => {
    switch (type) {
      case "user":
        return setExpand({
          ...expand,
          user: !expand.user,
          hospital: expand.hospital ? !expand.hospital : expand.hospital,
        });
      case "hospital":
        return setExpand({
          ...expand,
          hospital: !expand.hospital,
          user: expand.user ? !expand.user : expand.user,
        });
      default:
        return type;
    }
  };

  // setting authorization UI
  let showForAll = (
  <React.Fragment>
    <ListItem button>
      <ListItemIcon>
        <Info style={{ fontSize: "30px" }} />
      </ListItemIcon>
      <ListItemText primary='About us' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ContactSupport style={{ fontSize: "30px" }} />
      </ListItemIcon>
      <ListItemText primary='Contacts' />
    </ListItem>    
  </React.Fragment>
  )
  let sideButtons = (
    <List>
      {showForAll}
    </List>
  )
  if(props.userData) {
    sideButtons = (
      <List>
      <Link to='./dashboard'>
        <ListItem button>
          <ListItemIcon>
            <Dashboard style={{ fontSize: "30px" }} />
          </ListItemIcon>
          <ListItemText primary='Dashboard' />
        </ListItem>
      </Link>
      <ListItem button>
        <ListItemIcon>
          <AccessibleForward style={{ fontSize: "30px" }} />
        </ListItemIcon>
        <ListItemText primary='Patient' />
      </ListItem>
      <ListItem button onClick={() => handleExpand("user")}>
        <ListItemIcon>
          <Person style={{ fontSize: "30px" }} />
        </ListItemIcon>
        <ListItemText primary='User Mgmt' />
        {expand.user ? (
          <ExpandMore style={{ fontSize: "23px" }} />
        ) : (
          <ArrowBackIos />
        )}
      </ListItem>
      <Collapse in={expand.user} unmountOnExit>
        <List component='div' disablePadding style={{ background: "#43a047" }}>
          <ListItem button>
            <ListItemIcon>
              <RadioButtonUncheckedOutlined style={{ fontSize: "30px" }} />
            </ListItemIcon>
            <ListItemText primary='Doctors' />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <InsertInvitation style={{ fontSize: "30px" }} />
        </ListItemIcon>
        <ListItemText primary='Make Appointment' />
      </ListItem>
      <ListItem button onClick={() => handleExpand("hospital")}>
        <ListItemIcon>
          <LocalHospital style={{ fontSize: "30px" }} />
        </ListItemIcon>
        <ListItemText primary='Hospital Mgmt' />
        {expand.hospital ? (
          <ExpandMore style={{ fontSize: "23px" }} />
        ) : (
          <ArrowBackIos />
        )}
      </ListItem>
      <Collapse in={expand.hospital} unmountOnExit>
        <List component='div' disablePadding style={{ background: "#43a047" }}>
          <Link to='./hospitals'>
            <ListItem button>
              <ListItemIcon>
                <RadioButtonUncheckedOutlined style={{ fontSize: "30px" }} />
              </ListItemIcon>
              <ListItemText primary='Hospitals' />
            </ListItem>
          </Link>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemIcon>
          <AttachMoney style={{ fontSize: "30px" }} />
        </ListItemIcon>
        <ListItemText primary='Billing' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Edit style={{ fontSize: "30px" }} />
        </ListItemIcon>
        <ListItemText primary='Edit Profile' />
      </ListItem>
      {showForAll}
      <ListItem button onClick={props.logOut}>
        <ListItemIcon>
          <Cancel style={{ fontSize: "30px" }} />
        </ListItemIcon>
        <ListItemText primary='Logout' />
      </ListItem>      
    </List>
    )
  }

  return sideButtons;
};