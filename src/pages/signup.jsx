import React, { Component } from "react";
import PropTypes from "prop-types";

// MUI imports
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";


// Redux imports
import { signupUser } from "../Redux/actions/userActions";
import { connect } from "react-redux";

const styles = {
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.4em",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(255,255,255,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
      outline: "1px solid white",
    },
  },
  signupButton: {
    borderRadius: 30,
    border: 0,
    color: "white",
    height: 40,
    padding: "6px 30px",
    background:
      "linear-gradient(0deg, rgba(50,50,50,1) 0%, rgba(255,30,86,1) 100%)",
  },
  label: {
    textTransform: "capitalize",
  },
  labelbutton: {
    textTransform: "capitalize",
    color: "#ff1e56",
  },
  form: {
    // textAlign: "center",
    // paddingLeft:35
  },
  heading: {
    // marginTop: "5vh",
    textAlign: "center",
  },
  textField: {
    marginTop: 0,
    color: "white",
    "& label": {
      color: "black",
    },
  },
  buttonStyle: {
    marginTop: "4vh",
    marginBottom: "2vh",
    position: "relative",
  },
  errorText: {
    color: "red",
    fontSize: "1rem",
    marginTop: 10,
  },
  progress: {
    position: "absolute",
  },
  labelSelect: {
    marginTop: 7,
    color: "black",
  },
  selector: {
    minWidth: 150,
  },
  action: {
    alignSelf: "center",
    justifyContent: "center",
  },
  ref: {
    textAlign: "center",
  },
};
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confPasswd: "",
      username: "",
      phoneNo: "",
      branch: "",
      sem: "",
      errors: {},
      open: false,
    };
  }
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.ui.errors) {
      this.setState({
        errors: nextProps.ui.errors,
      });
    }
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const loginDetails = {
      email: this.state.email,
      passwd: this.state.password,
      confPasswd: this.state.confPasswd,
      handle: this.state.username,
      branch: this.state.branch,
      phoneNo: this.state.phoneNo,
      sem: this.state.sem,
    };
    console.log(loginDetails);
    this.props.signupUser(loginDetails, this.props.history);
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const {
      classes,
      ui: { loading },
    } = this.props;
    const { errors } = this.state;
    console.log(errors);
    return (
      <div>
        <Button
          variant="contained"
          onClick={this.handleOpen}
          size="small"
          classes={{
            root: classes.signupButton,
            label: classes.label,
          }}
        >
          Signup
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle className={classes.heading}>
            <Typography variant="h4">Signup</Typography>
          </DialogTitle>
          <Grid container className={classes.form}>
            <Grid item lg={1} xs={1}></Grid>
            <Grid item lg={10} xs={10}>
              <form noValidate onSubmit={this.handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={10} lg={10}>
                    <TextField
                      type="text"
                      id="username"
                      name="username"
                      label="Username"
                      key="username"
                      className={classes.textField}
                      value={this.state.username}
                      onChange={this.handleChange}
                      color="secondary"
                      size="medium"
                      helperText={errors.handle}
                      error={errors.handle ? true : false}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={10} lg={10}>
                    <TextField
                      type="text"
                      id="email"
                      name="email"
                      label="Email"
                      key="email"
                      className={classes.textField}
                      value={this.state.email}
                      onChange={this.handleChange}
                      color="secondary"
                      size="medium"
                      helperText={errors.email}
                      error={errors.email ? true : false}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={10} lg={10}>
                    <InputLabel
                      id="branchlabel"
                      className={classes.labelSelect}
                    >
                      Branch
                    </InputLabel>
                    <Select
                      labelId="branchlabel"
                      name="branch"
                      value={this.state.branch}
                      onChange={this.handleChange}
                      className={classes.selector}
                      color="secondary"
                    >
                      <MenuItem value={"CSE"}>Computer Science</MenuItem>
                      <MenuItem value={"EC"}>
                        Electronics And Communication
                      </MenuItem>
                      <MenuItem value={"EEE"}>
                        Electrical And Electronics
                      </MenuItem>
                      <MenuItem value={"ME"}>Mechanical Engineering</MenuItem>
                      <MenuItem value={"CE"}>Civil Engineering</MenuItem>
                      <MenuItem value={"AE"}>Applied Electronics</MenuItem>
                      <MenuItem value={"IE"}>Industrial Engineering</MenuItem>
                      <MenuItem value={"ARCHI"}>Architecture</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={10} lg={10}>
                    <InputLabel
                      htmlFor="semester"
                      className={classes.labelSelect}
                    >
                      Semester
                    </InputLabel>
                    <Select
                      label="branch"
                      labelId="semester"
                      id="Semester"
                      name="sem"
                      value={this.state.sem}
                      onChange={this.handleChange}
                      className={classes.selector}
                      color="secondary"
                    >
                      <MenuItem value={"S1"}>Semester 1</MenuItem>
                      <MenuItem value={"S2"}>Semester 2</MenuItem>
                      <MenuItem value={"S3"}>Semester 3</MenuItem>
                      <MenuItem value={"S4"}>Semester 4</MenuItem>
                      <MenuItem value={"S5"}>Semester 5</MenuItem>
                      <MenuItem value={"S6"}>Semester 6</MenuItem>
                      <MenuItem value={"S7"}>Semester 7</MenuItem>
                      <MenuItem value={"S8"}>Semester 8</MenuItem>
                      <MenuItem value={"S9"}>Semester 9</MenuItem>
                      <MenuItem value={"S10"}>Semester 10</MenuItem>
                    </Select>
                  </Grid>
                  <Grid item xs={10} lg={10}>
                    <TextField
                      type="number"
                      id="phoneNo"
                      name="phoneNo"
                      label="Phone Number"
                      key="PhoneNO"
                      className={classes.textField}
                      value={this.state.phoneNo}
                      onChange={this.handleChange}
                      color="secondary"
                      size="medium"
                      helperText={errors.phoneNo}
                      error={errors.phoneNo ? true : false}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={10} lg={10}>
                    <TextField
                      type="password"
                      id="password"
                      name="password"
                      label="Password"
                      key="password"
                      className={classes.textField}
                      value={this.state.password}
                      onChange={this.handleChange}
                      color="secondary"
                      size="medium"
                      helperText={errors.passwd}
                      error={errors.passwd ? true : false}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={10} lg={10}>
                    <TextField
                      type="password"
                      id="confPasswd"
                      name="confPasswd"
                      label="Confirm Password"
                      key="confPasswd"
                      className={classes.textField}
                      value={this.state.confPasswd}
                      onChange={this.handleChange}
                      color="secondary"
                      size="medium"
                      helperText={errors.confpasswd}
                      error={errors.confpasswd ? true : false}
                      fullWidth
                    />
                  </Grid>
                </Grid>
                <DialogActions className={classes.action}>
                  <Button
                    type="submit"
                    color="secondary"
                    variant="contained"
                    className={classes.buttonStyle}
                    disabled={loading}
                  >
                    Signup
                    {loading && (
                      <CircularProgress
                        className={classes.progress}
                        color="secondary"
                        size={30}
                      />
                    )}
                  </Button>
                </DialogActions>
              </form>
              <br></br>
              <DialogContent className={classes.ref}>
                <small>
                  Already have an account ? Login{" "}
                  <Button
                    onClick={this.handleClose}
                    classes={{
                      label: classes.labelbutton,
                    }}
                  >
                    here
                  </Button>
                </small>
              </DialogContent>
            </Grid>
            <Grid item xs={1} lg={1}></Grid>
          </Grid>
        </Dialog>
      </div>
    );
  }
}
Signup.propType = {
  classes: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProp = (state) => ({
  ui: state.ui,
  user: state.user,
});
const mapActionToProp = {
  signupUser,
};

export default connect(
  mapStateToProp,
  mapActionToProp
)(withStyles(styles)(Signup));
