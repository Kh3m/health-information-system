import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as actions from "../store/actions";
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

  // switch mode state
  const [isSignUp, setIsSignUp] = useState(false);

  // login form state
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: ""
  });

  const switchViewHandler = () => {
    setIsSignUp(!isSignUp);
  }
  const switchView = () => {
    let defaultView =  <div>Don't have an account ? <Button onClick={switchViewHandler} color='primary'>Switch To Sign Up</Button></div>
    if(isSignUp) {
      defaultView =  <div>Already have an account ? <Button onClick={switchViewHandler} color='primary'>Switch To Sign In</Button></div>
    }

    return defaultView;
  }

  // two way binding
  const loginFormChangeHandler = (event, prop) => {
    const loginFormDataUpdate = {...loginFormData};
    loginFormDataUpdate[prop] = event.target.value;
    setLoginFormData(loginFormDataUpdate);
  };

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
              <Typography variant='h2'>{ isSignUp ? "Sign Up" : "Sign In"}</Typography>
              <Typography variant='h5' color="error">{props.error ? props.error.message:""}</Typography>
              <form className={style.root}>
                <FormControl>
                  <TextField onChange={(event) => loginFormChangeHandler(event, "email")} 
                    value={loginFormData.email}
                    id='standard-basic' label='Email' type='email' />
                </FormControl>
                <FormControl>
                  <InputLabel htmlFor='standard-adornment-password'>
                    Password
                  </InputLabel>
                  <Input
                    id='standard-adornment-password'
                    type={true ? "text" : "password"}
                    value={loginFormData.password}
                    onChange={(event) => loginFormChangeHandler(event, "password")}
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
                <Button 
                  onClick={() => props.onLoginSubmitHandler(isSignUp, {email:loginFormData.email, password:loginFormData.password})}
                  size='large' variant='contained' color='secondary' 
                  disabled={props.loading ? true : false}>
                  { props.loading ? "Loading..." : isSignUp ? "Sign Up" : "Sign In"}
                </Button>
                
              </form>
              <Typography variant='subtitle1'>Forget Password?</Typography>
              <Typography variant='subtitle1'>
                { switchView() }
              </Typography>
              <Typography variant='body1'>
                Health Information System, Nigeria - Copyright &copy; {new Date().getFullYear()}
              </Typography>
            </div>
          </Box>
        </Box>
      </Slide>
    </Backdrop>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    authSuccess: state.auth.success
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLoginSubmitHandler: (isSignUp, authData) => dispatch(actions.auth(isSignUp, authData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
