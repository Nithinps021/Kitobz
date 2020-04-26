import React, { Component } from "react";

// pages
import Login from './login'
import SignUp from './signup'


// MUI
import withStyles from "@material-ui/core/styles/withStyles";

import background from "../images/background.webp";
import logo from "../images/KiTobZ.svg";

const styles = (theme) => ({
  
  back: {
    [theme.breakpoints.up("md")]: {
      objectFit: "cover",
      width: "100vw",
      position: "fixed",
    },
    objectFit: "cover",
    width: "100vw",
    position: "fixed",
    height: "100vh",
  },
  logo: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      marginTop: "5vh",
      marginLeft: "5vh",
      objectFit: "cover",
      height: 45,
    },
    position: "absolute",
    marginTop: "6vh",
    marginLeft: "5vh",
    objectFit: "cover",
    height: 30,
  },
  login: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      right: 0,
      marginRight: "15vh",
      marginTop: "7vh",
    },
    position: "absolute",
    right: 0,
    marginRight: "5vh",
    marginTop: "6vh",
  },
  signup: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      left: "47vw",
      top: "60vh",
    },
    position: "absolute",
    left: "40vw",
    top: "60vh",
  },
  
});

export class kitobz extends Component {
  handleLogin=()=>{
    const button=document.getElementById('login');
    button.click();
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <img src={background} className={classes.back} alt="imgage" />
        <img src={logo} className={classes.logo} alt="img" />
        <div className={classes.login}>
          <Login/>
        </div>
        <div className={classes.signup}>
          <SignUp/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(kitobz);
