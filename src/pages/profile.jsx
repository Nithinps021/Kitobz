import React, { Component, Fragment } from "react";

// components
import NavBar from "../components/NavBar";
import Update from "../components/editUserDetails";

// redux imports
import { connect } from "react-redux";
import { addimg, updateImage } from "../Redux/actions/dataActions";
import { getUserData } from "../Redux/actions/userActions";

// mui imports
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import withStyles from "@material-ui/core/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { Box, IconButton, Tooltip} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableCell from '@material-ui/core/TableCell'
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";

import book from "../images/book_img.webp";

const style = (theme) => ({
  root: {
    [theme.breakpoints.up("md")]: {
      marginTop: "10vh",
    },
    marginTop: 0,
    marginBottom: "10vh",
  },
  img: {
    [theme.breakpoints.up("md")]: {
      marginTop: 0,
      height: 300,
      width: "99vw",
      objectFit: "cover",
      zIndex: 0,
    },
    marginTop: 0,
    height: 300,
    width: "100vw",
    objectFit: "cover",
    zIndex: 0,
    position: "fixed",
  },
  avatarDiv: {
    [theme.breakpoints.up("md")]: {
      marginLeft: "21%",
      marginRight: "20%",
      position: "absolute",
      zIndex: "3",
      top: "30%",
    },
    position: "absolute",
    zIndex: "3",
    top: "30vh",
    marginLeft: "30vw",
    marginRight: "30vw",
  },
  editicon: {
    [theme.breakpoints.up("md")]: {
      padding: 0,
      marginLeft: "8vw",
      top: 0,
      margin: 0,
    },
    marginLeft: "30vw",
    padding: 0,
  },
  avatar: {
    [theme.breakpoints.up("md")]: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      marginLeft: "0vw",
    },
    width: theme.spacing(15),
    height: theme.spacing(15),
    marginLeft: "3vw",
  },
  paper: {
    [theme.breakpoints.up("md")]: {
      position: "relative",
      padding: "25vw",
      paddingTop: "7vw",
      paddingBottom: "7vw",
    },
    paddingBottom: "7vw",
    marginBottom: "5vh",
  },
  table: {
    [theme.breakpoints.up("md")]: {
      MaxWidth: 50,
      marginTop: 50,
    },
    marginTop: "0vh",
  },
  progress: {
    [theme.breakpoints.up("md")]: {
      zIndex: "5",
      position: "absolute",
      marginTop: "3vw",
      marginLeft: "3vw",
    },
    position: "absolute",
    zIndex: "5",
    marginTop: "5vh",
    marginLeft: "6vh",
  },
  update: {
    [theme.breakpoints.up("md")]: {
      position: "absolute",
      zIndex: "5",
      marginLeft: "30vw",
      marginTop: "10vw",
    },
    position: "absolute",
    zindex: "5",
    marginLeft: "22vh",
    marginTop: "10vh",
  },
  user: {
    [theme.breakpoints.up("md")]: {
      marginTop: "0vh",
      marginLeft: 0,
    },
    marginTop: "15vh",
    marginLeft: 0,
  },
});

export class profile extends Component {
  componentDidMount() {
    this.props.getUserData();
  }

  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formDate = new FormData();
    formDate.append("image", image, image.name);
    this.props.addimg(formDate);
    if (!this.props.data.loading) {
      const img = { imgURL: this.props.data.imgURL };
      this.props.updateImage(img);
    }
  };
  handleInputImg = () => {
    const button = document.getElementById("imageinput");
    button.click();
  };
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formDate = new FormData();
    formDate.append("image", image, image.name);
    this.props.addimg(formDate);
  };

  render() {
    const {
      classes,
      ui:{loading},
      userDetails: { userDetails },
    } = this.props;
    let bname;
    for (let i = 0; i < Branch.length; i++) {
      if (Branch[i].short === userDetails.branch) {
        bname = Branch[i].name;
        break;
      }
    }
    if (this.props.data.imgURL && !this.props.loading) {
      const img = { imgURL: this.props.data.imgURL };
      this.props.updateImage(img);
    }

    return (
      <Fragment className={classes.root}>
        <NavBar style={{ margin: 0 }} />
        {loading && <LinearProgress color="secondary" />}
        <Grid container>
          <img src={book} className={classes.img} />
          <Grid item lg={3} xs={12}></Grid>
          <Grid item lg={6} xs={12}>
            <span className={classes.avatarDiv}>
              <span className={classes.progress}>
                {this.props.data.loading && (
                  <CircularProgress color="secondary" />
                )}
              </span>
              <span className={classes.update}>
                <Update />
              </span>
              <Avatar
                alt="profile pic"
                src={this.props.userDetails.userDetails.imgURL}
                className={classes.avatar}
              ></Avatar>
              <Grid container direction="column">
                <Grid item xs={12}></Grid>
              </Grid>
              <IconButton
                className={classes.editicon}
                onClick={this.handleInputImg}
              >
                <Tooltip title="edit profile">
                  <AddAPhotoIcon color="secondary" fontSize="medium" />
                </Tooltip>
              </IconButton>
              <input
                type="file"
                id="imageinput"
                onChange={this.handleImageChange}
                hidden="hidden"
              ></input>
            </span>
            <Box
              color="white"
              position="absolute"
              top="40%"
              left="5%"
              right="5%"
              zIndex="1"
              width="90%"
            >
              <Paper elevation={15} className={classes.paper}>
                <Grid container direction="column" alignContent="center">
                  <Grid item xs={12}>
                    <Typography variant="h4" className={classes.user}>
                      {userDetails.username}
                    </Typography>
                  </Grid>
                </Grid>
                <Table className={classes.table}>
                  <TableRow>
                    <TableCell align="left">
                      <Typography variant="h6">Branch</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{bname}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Typography variant="h6">Semester</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">{userDetails.sem}</Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell align="left">
                      <Typography variant="h6">Phone Number</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography variant="body1">
                        {userDetails.phoneNo}
                      </Typography>
                    </TableCell>
                  </TableRow>
                </Table>
              </Paper>
            </Box>
            <Grid item lg={3} xs={12}></Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.user,
  data: state.data,
  ui:state.ui
});

const mapActionToProps = { addimg, updateImage, getUserData };

const Branch = [
  { short: "CSE", name: "Computer Science" },
  { short: "ME", name: "Mechanical Engineering" },
  { short: "EC", name: "Electronic and Communication" },
  { short: "EEE", name: "Electrical Engineering" },
  { short: "CE", name: "Civil Engineering" },
  { short: "ARCHI", name: "Architecture" },
];

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(style)(profile));
