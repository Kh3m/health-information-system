import React, { useState, useEffect } from "react";
import {
  TextField,
  makeStyles,
  Typography,
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
  IconButton,
  Button,
  Slide,
  Backdrop,
  Box,
  // CircularProgress,
} from "@material-ui/core";

import { Visibility, VisibilityOff, Close } from "@material-ui/icons";

import headerLogo from "../assets/images/logow.png";

const useStyles = makeStyles((theme) => ({
  "@global": {},
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  card: {
    height: 600,
    width: 500,
    background: theme.palette.common.white,
  },
  label: {
    width: "300px",
    padding: "10px",
    backgroundColor: "#004900",
    color: "white",
  },
  HISLogo: {
    display: "flex",
    justifyContent: "center",
  },
  form: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  formWrapper: {
    width: "400px",
    padding: "30px",
    textAlign: "center",
    position: "relative",
    color: theme.palette.common.black,
  },
  closeButton: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

function Form(props) {
  const { openModal, handleModalClose } = props;
  // const [show, setShow] = useState(0);

  // show circularProgress for 20ms when user press login
  // useEffect(() => {
  //   function tick() {
  //     // reset when reaching 100%
  //     setShow((oldProgress) => (oldProgress >= 80 ? 0 : oldProgress + 1));
  //   }
  //   const timer = setInterval(tick, 10);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  const style = useStyles();
  return (
    <Backdrop open={openModal} className={style.backdrop}>
      {/* <CircularProgress variant='determinate' value={show} /> */}
      <Slide direction='up' in={openModal} mountOnEnter unmountOnExit>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          className={style.card}>
          <Box display='flex' alignSelf='flex-end'>
            <IconButton style={{ margin: "10px" }} onClick={handleModalClose}>
              <Close style={{ fontSize: "30px" }} />
            </IconButton>
          </Box>
          <Box className={style.HISLogo}>
            <img src={headerLogo} alt='header_icon' />
          </Box>
          <Box display='flex' justifyContent='center' alignItems='center'>
            <div className={style.formWrapper}>
              <Typography variant='h2'>Sign in</Typography>
              <form className={style.root}>
                <FormControl>
                  <TextField id='standard-basic' label='Email' type='email' />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor='standard-adornment-password'>
                    Password
                  </InputLabel>
                  <Input
                    id='standard-adornment-password'
                    type={true ? "text" : "password"}
                    value={""}
                    // onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position='end'>
                        <IconButton
                          aria-label='toggle password visibility'
                          // onClick={handleClickShowPassword}
                          // onMouseDown={handleMouseDownPassword}
                        >
                          {openModal ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Button size='large' variant='contained' color='secondary'>
                  Sign in
                </Button>
              </form>
              <Typography variant='subtitle1'>Forget Password?</Typography>
              <Typography variant='subtitle1'>
                Don't have an account?
              </Typography>
              <Typography variant='body1'>
                Health Information System, Nigeria - Copyright &copy; 2020
              </Typography>
            </div>
          </Box>
        </Box>
      </Slide>
    </Backdrop>
  );
}

export default Form;
