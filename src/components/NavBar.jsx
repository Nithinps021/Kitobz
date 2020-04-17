import React, { Component } from "react";

// components import
import AddBook from "../components/AddBook";
import Logout from '../components/Logout'

//material ui imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";



export class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  hadndleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar className="nav-container">
            <Tooltip title="Home">
              <IconButton>
                <HomeIcon color="secondary"></HomeIcon>
              </IconButton>
            </Tooltip>
            <AddBook></AddBook>
            <Logout></Logout>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default NavBar;
