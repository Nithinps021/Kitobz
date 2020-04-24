import React, { Component, Fragment } from "react";

// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";
import UpdateIcon from "@material-ui/icons/Update";
import CircularProgress from "@material-ui/core/CircularProgress";
import IconButton from '@material-ui/core/IconButton'
// Redux imports
import { connect } from "react-redux";
import { updateProfile,offupdate } from "../Redux/actions/userActions";

const style = {
  form: {
    textAlign: "center",
    padding: 20,
  },
  heading: {
    marginTop: "5vh",
    textAlign: "center",
  },
  textField: {
    marginTop: 0,
  },
  buttonStyle: {
    marginTop: "4vh",
    marginBottom: "2vh",
    position: "relative",
  },
  progress: {
    position: "absolute",
  },
  label: {
    marginTop: 7,
  },
  selector: {
    minWidth: 150,
  },
  ref: {
    alignSelf: "center",
  },
};

class EditUserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open:false,
      username: this.props.user.username,
      branch: this.props.user.branch,
      sem: this.props.user.sem,
      phoneNo: this.props.user.phoneNo,
      errors:{}
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.ui.errors) {
      this.setState({
        errors: nextProps.ui.errors,
      });
    }
  }
  handleOpen = () => {
    this.setState({
      open: true,
    });
  };
  handleClose = () => {
    this.setState({
      open: false,
      errors: {},
    });
  };
  handleClose2 = () => {
    this.setState({
      open: false,
      errors:{},
    });
    this.props.offupdate();
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = () => {
    const userData = {
      branch: this.state.branch || this.props.user.branch,
      sem: this.state.sem || this.props.user.sem,
      phoneNo: this.state.phoneNo || this.props.user.phoneNo,
    };
    this.props.updateProfile(userData);
  };

  render() {
    const {
      classes,
      ui: { loading },
    } = this.props;
    const {errors}=this.state
    return (
      <Fragment>
        <Tooltip title="Update Details" placement="top">
          {window.screen.availWidth < 780 ? (
            <IconButton onClick={this.handleOpen}>
              <UpdateIcon color="secondary" />
            </IconButton>
          ) : (
            <Button
              variant="contained"
              startIcon={<UpdateIcon />}
              color="primary"
              onClick={this.handleOpen}
            >
              update
            </Button>
          )}
        </Tooltip>
        {this.props.updated && (
          <Dialog
            open={this.state.open}
            onClose={this.handleClose2}
            maxWidth="sm"
          >
            <DialogContent>
              <DialogContentText className={classes.text}>
                <Typography variant={window.screen.availWidth < 780?"h7" :"h6" }>
                  Details has been Successfully updated...
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.ref}>
              <Button
                onClick={this.handleClose2}
                color="secondary"
                variant="contained"
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        )}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          {loading && <LinearProgress color="secondary" />}
          <DialogTitle className={classes.form}>Update Profile</DialogTitle>
          <DialogContent>
            <form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    id="username"
                    name="username"
                    label="Username"
                    key="username"
                    defaultValue={this.props.user.username}
                    className={classes.textField}
                    value={this.state.username}
                    onChange={this.handleChange}
                    color="secondary"
                    size="medium"
                    fullWidth
                    InputProps={{
                      readOnly: true,
                    }}
                  />
                </Grid>
                <Grid item lg={6} md={6} xs={12}>
                  <InputLabel id="branchlabel" className={classes.label}>
                    Branch
                  </InputLabel>
                  <Select
                    labelId="branchlabel"
                    defaultValue={this.props.user.branch}
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
                <Grid item lg={6} md={6} xs={12}>
                  <InputLabel htmlFor="semester" className={classes.label}>
                    Semester
                  </InputLabel>
                  <Select
                    defaultValue={this.props.user.sem}
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
                <Grid item xs={12}>
                  <TextField
                    defaultValue={this.props.user.phoneNo}
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
                    fullWidth
                    helperText={errors.phoneNo}
                    error={errors.phoneNo ? true : false}
                  />
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions className={classes.ref}>
            <Button
              type="submit"
              color="secondary"
              variant="contained"
              className={classes.buttonStyle}
              disabled={loading}
              onClick={this.handleSubmit}
            >
              Update
              {loading && (
                <CircularProgress
                  className={classes.progress}
                  color="secondary"
                  size={30}
                />
              )}
            </Button>
            <Button
              onClick={this.handleClose}
              color="secondary"
              variant="contained"
              className={classes.buttonStyle}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
const mapStateToProp = (state) => ({
  ui: state.ui,
  user: state.user.userDetails,
  updated: state.user.updated,
});

const mapActionToProp = { updateProfile, offupdate };

export default connect(
  mapStateToProp,
  mapActionToProp
)(withStyles(style)(EditUserDetails));
