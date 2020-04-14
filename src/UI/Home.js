import React from "react";
import {
  makeStyles,
  Button,
  Typography,
  Grid,
  // Grow,
  Paper,
  Zoom,
  Fade,
} from "@material-ui/core";
import { DashboardCard } from "../components/Card";
// import Footer from "../components/Footer";

import media from "../assets/images/logon.png";
import banner from "../assets/images/banner3.jpg";
import headerLogo from "../assets/images/logow.png";


const useStyles = makeStyles((theme) => ({
  bannerWrapper: {
    width: "100%",
    height: "500px",
    zIndex: 4,
    backgroundPosition: "center",
    // padding: "50px",
    backgroundImage: `url(${banner})`,
  },
  bannerMessage: {
    width: "400px",
    height: "300px",
    padding: theme.spacing(2, 0, 0, 1),
    backgroundColor: "#34a853",
    color: "white",
    position: "relative",
    left: 30,
    top: 55,
  },
  dashboardbutton: {
    maxWidth: "350px",
    position: "relative",
    top: 100,
    // left: 30,
    display: "flex",
    justifyContent: "space-around",
  },
  cards: {
    marginTop: "40px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    overflowX: "scroll",
    width: "100%",
    msOverflowStyle: "none",
    padding: theme.spacing(5),
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  dashboardCard: {
    width: theme.spacing(35),
    height: theme.spacing(46),
  },
  dashboardCardMedia: {
    height: 132,
  },
  HISLogo: {
    width: theme.spacing(30),
    position: "relative",
    left: "55px",
  },
}));

const text = `
  Folders are nodes in the Cloud Platform Resource Hierarchy. A
  folder can contain projects, other folders, or a combination of
  both. Organizations can use folders to group projects under the
  organization node in a hierarchy
  `;

function Home(props) {
  const { LoginClick } = props;
  const style = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}>
        <Fade
          in={true}
          style={{ transformOrigin: "0 0 0 0" }}
          {...(true ? { timeout: 3000 } : {})}>
          <div className={style.bannerWrapper}>
            <Paper elevation={10} className={style.bannerMessage}>
            <img
                src={headerLogo}
                className={style.HISLogo}
                alt='header_icon'
              />
              <Typography variant='h2'>
                Welcome to National Health information System a centralized
                system for health information records.
              </Typography>
              <div className={style.dashboardbutton}>
                <Button variant='contained' size='large'>
                  Register
                </Button>
                <Button variant='contained' size='large' onClick={LoginClick}>
                  Login
                </Button>
              </div>
            </Paper>
          </div>
        </Fade>
      </Grid>
      <Grid item xs={12}>
        <div className={style.cards}>
          <Zoom in={true} style={{ transitionDelay: true ? "500ms" : "0ms" }}>
            <DashboardCard
              component='div'
              image={media}
              elevation={10}
              size='large'
              media={style.dashboardCardMedia}
              className={style.dashboardCard}
              label='See More'
              variant='outlined'>
              <Typography variant='h4'>EMERGENCY SERVICE</Typography>
              <Typography variant='body1' style={{ paddingTop: "5px" }}>
                {text}
              </Typography>
              <Typography>0803-191-5694</Typography>
            </DashboardCard>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: true ? "700ms" : "0ms" }}>
            <DashboardCard
              image={media}
              elevation={10}
              size='large'
              media={style.dashboardCardMedia}
              className={style.dashboardCard}
              label='See More'
              variant='outlined'>
              <Typography variant='h4'>
                DO YOU WANT TO MAKE AN APPOINTMENT
              </Typography>
              <Typography variant='body1' style={{ paddingTop: "5px" }}>
                {text}
              </Typography>
            </DashboardCard>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: true ? "1000ms" : "0ms" }}>
            <DashboardCard
              image={media}
              elevation={10}
              size='large'
              media={style.dashboardCardMedia}
              className={style.dashboardCard}
              label='See More'
              variant='outlined'>
              <Typography variant='h4'>ABOUT-US</Typography>
              <Typography variant='body1' style={{ paddingTop: "5px" }}>
                {text}
              </Typography>
            </DashboardCard>
          </Zoom>
        </div>
      </Grid>
      {/* <Grid item xs={12}>
        <Footer />
      </Grid> */}
    </Grid>
  );
}

export default Home;
