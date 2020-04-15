import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  makeStyles,
  Box,
  Breadcrumbs,
  Paper,
  Button,
  Select,
  FormControl,
} from "@material-ui/core";
import { Home, Delete, Add, Check, Block, ViewList } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    height: theme.spacing(53),
  },
  breadcrumbs: {
    margin: theme.spacing(2, 2, 0, 0),
  },
  paper: {
    margin: theme.spacing(1, 2, 0, 2),
  },
  button: {
    width: theme.spacing(60),
    maxHeight: "40px",
  },
  formControl: {
    minWidth: 120,
  },
}));
function Hospitals(props) {
  const style = useStyles();
  return (
    <Box className={style.root}>
      <Box component='div' display='flex' justifyContent='space-between'>
        <Typography variant='h2' style={{ padding: "12px" }}>
          Hospitals
        </Typography>
        <Breadcrumbs separator='/' className={style.breadcrumbs}>
          <Link to='./hospitals' className={style.link}>
            <Home className={style.icon} />
            Home
          </Link>
          <Link to='./dashboard'>Hospitals</Link>
        </Breadcrumbs>
      </Box>
      <Box component='div' className={style.paper}>
        <Box
          component='div'
          display='flex'
          flexDirection='row'
          justifyContent='space-between'>
          <Box
            component='div'
            className={style.button}
            display='flex'
            justifyContent='space-evenly'>
            <Button
              variant='contained'
              endIcon={<Add style={{ color: "white" }} />}
              color='primary'>
              Add New
            </Button>
            <Button
              variant='contained'
              endIcon={<Delete style={{ color: "white" }} />}
              color='primary'>
              Delete
            </Button>
            <Button
              variant='contained'
              endIcon={<Check style={{ color: "white" }} />}
              color='primary'>
              Active
            </Button>
            <Button
              variant='contained'
              endIcon={<Block style={{ color: "white" }} />}
              color='primary'>
              Inactive
            </Button>
            <Button
              variant='contained'
              endIcon={<ViewList style={{ color: "white" }} />}
              color='primary'>
              Show All
            </Button>
          </Box>
          <Box component='div' display="flex" justifyContent="space-between">
            <FormControl variant='outlined' className={style.formControl}>
              <Select native style={{ padding: "0px" }}>
                <option aria-label='None'>....Select....</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
            <FormControl variant='outlined' className={style.formControl}>
              <Select native style={{ padding: "0px" }}>
                <option aria-label='None'>....Select....</option>
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Hospitals;
