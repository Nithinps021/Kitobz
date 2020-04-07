import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// MUI imports
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

// redux imports
import { connect } from "react-redux";
import { loginUser } from "../Redux/actions/userActions";

const styles = {
  form: {
    textAlign: "center",
  },
  heading: {
    marginTop: "5vh",
  },
  textField: {
    marginTop: 30,
    color: "white",
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
};

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.ui.errors) {
      this.setState({
        errors: nextProps.ui.errors,
      });
    }
  }
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
      ui: { loading},
    } = this.props;
    const { errors } = this.state;
    console.log(errors);
    return (
      <div>
        <Grid container className={classes.form} >
          <Grid item sm></Grid>
          <Grid item sm>
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
            <br></br>
            <small>
              Dont have an account ? sign up <Link to="/signup">Here</Link>
            </small>
          </Grid>
          <Grid item sm></Grid>
        </Grid>
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
