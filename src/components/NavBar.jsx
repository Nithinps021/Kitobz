import React, { Component } from "react";
import "../App.css";
import {Link} from 'react-router-dom'

// components import
import AddBook from "../components/AddBook";
import Logout from "../components/Logout";
import MyBooks from "../pages/MyBooks";

// redux Imports
import { connect } from "react-redux";
import {menuClick,menuClose} from '../Redux/actions/userActions'
import {getUserData} from '../Redux/actions/userActions'

//material ui imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";

// drawer MUI importxs
import clsx from "clsx";
import { withStyles} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";


// MUI icons
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import CloseIcon from "@material-ui/icons/Close";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import FavoriteIcon from "@material-ui/icons/Favorite";
import SettingsIcon from "@material-ui/icons/Settings";
import FilterListIcon from "@material-ui/icons/FilterList";
import kitobz from "../images/KiTobZ.svg";
const drawerWidth = 200;

const useStyles = (theme) => ({
  root: {
    marginBottom: 0,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    marginTop: "10vh",
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "#323232",
    color: "white",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 0),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  avatar: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  avatarDiv: {
    alignSelf: "center",
  },
  welcome: {
    textAlign: "center",
  },
  kitobz: {
    [theme.breakpoints.up("md")]: {
      objectfit: "cover",
      height: 27,
      marginLeft: 25,
    },
    height:10,
    objectfit: "cover",
    height: 27,
  },
});

class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    this.props.getUserData();
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      username: nextProps.userDetails.username,
    });
  }
  handleOpen = () => {
    this.props.menuClick()
  };
  handleClose = () => {
    this.props.menuClose()
  };
  hadndleLogout = () => {
    this.props.logoutUser();
  };
  render() {
    const {
      classes,
      userDetails: { userDetails },
    } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.props.menu.open,
          })}
        >
          <Grid container>
            <Grid item xs={6} lg={4}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleOpen}
                  edge="start"
                  className={clsx(
                    classes.menuButton,
                    this.props.menu.open && classes.hide
                  )}
                >
                  <MenuIcon color="white" />
                </IconButton>
                <img src={kitobz} className={classes.kitobz} />
              </Toolbar>
            </Grid>
            <Grid item lg={6}></Grid>
            <Grid item xs={6} lg={2}>
              <Toolbar>
                <Tooltip title="Home">
                  <IconButton component={Link} to="/">
                    <HomeIcon color="secondary"></HomeIcon>
                  </IconButton>
                </Tooltip>
                <AddBook></AddBook>
                <Logout></Logout>
              </Toolbar>
            </Grid>
          </Grid>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.props.menu.open}
          mt={50}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleClose} color="inherit"> 
              <CloseIcon color="white" />
            </IconButton>
          </div>
          <div className={classes.avatarDiv}>
            <Avatar
              alt="profile pic"
              src={this.props.userDetails.userDetails.imgURL}
              className={classes.avatar}
            />
          </div>
          <p className={classes.welcome} varient="h6">
            hi {userDetails.username}
          </p>
          <List>
            <ListItem button component={Link} to="/profile">
              <ListItemIcon>
                <PersonPinIcon color="secondary" fontSize="default" />
              </ListItemIcon>
              <ListItemText>Account</ListItemText>
            </ListItem>
            <ListItem button component={Link} to="/mybooks">
              <ListItemIcon>
                <MenuBookIcon color="secondary" fontSize="default" />
              </ListItemIcon>
              <ListItemText>My Books</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FavoriteIcon color="secondary" fontSize="default" />
              </ListItemIcon>
              <ListItemText>Whishlist</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FilterListIcon color="secondary" fontSize="default" />
              </ListItemIcon>
              <ListItemText>Filter</ListItemText>
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <SettingsIcon color="secondary" fontSize="default" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
            </ListItem>
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  userDetails: state.user,
  menu:state.ui
});

const mapActionToProps = {menuClick,menuClose,getUserData};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(useStyles)(NavBar));
