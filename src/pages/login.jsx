import React, { Component } from "react";
import PropTypes from "prop-types";

// MUI imports
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

// redux imports
import { connect } from "react-redux";
import { loginUser } from "../Redux/actions/userActions";

const styles = {
  root: {
    // background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,0,0,1) 0%, rgba(204,8,8,1) 0%, rgba(248,27,76,1) 87%, rgba(255,30,86,1) 100%)",
    borderRadius: 15,
    border: 0,
    color: "white",
    height: 30,
    padding: "2px 25px",
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
    textAlign: "center",
  },
  heading: {
    marginTop: "3vh",
  },
  textField: {
    marginTop: 25,
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
  dialog: {
    Bottom: "10vh",
  },
};

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      open: false,
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
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const loginDetails = {
      Email: this.state.email,
      passwd: this.state.password,
    };
    this.props.loginUser(loginDetails, this.props.history);
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
      <div className={classes.dialog}>
        <Button
          variant="contained"
          size="small"
          onClick={this.handleOpen}
          classes={{
            root: classes.root,
            label: classes.label,
          }}
        >
          Login
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="sm"
          fullWidth
          className={classes.dialog}
        >
          <Grid container className={classes.form}>
            <Grid item lg={2} xs={1}></Grid>
            <Grid item lg={8} xs={10}>
              <Typography variant="h3" className={classes.heading}>
                Login
              </Typography>
              <form noValidate onSubmit={this.handleSubmit}>
                <TextField
                  type="email"
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
                  error={errors.email ? true : false}
                  fullWidth
                />
                {errors.Error && (
                  <Typography className={classes.errorText} variant="body2">
                    {errors.Error}
                  </Typography>
                )}
                <Button
                  type="submit"
                  color="secondary"
                  variant="contained"
                  className={classes.buttonStyle}
                  disabled={loading}
                >
                  Login
                  {loading && (
                    <CircularProgress
                      className={classes.progress}
                      color="secondary"
                      size={30}
                    />
                  )}
                </Button>
              </form>
              <DialogContent className={classes.dialog}>
                <small>
                  Dont have an account ? sign up{" "}
                  <Button onClick={this.handleClose} 
                  classes={{
                    label:classes.labelbutton
                  }}>
                    here
                  </Button>
                </small>
              </DialogContent>
            </Grid>
            <Grid item lg={2} xs={1}></Grid>
          </Grid>
        </Dialog>
      </div>
    );
  }
}

login.propType = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  ui: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
  ui: state.ui,
});

const mapActionToProps = {
  loginUser,
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(login));
