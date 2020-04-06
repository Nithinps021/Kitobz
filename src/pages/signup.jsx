import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// MUI imports
import Grid from "@material-ui/core/Grid";
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  form: {
    textAlign: "center",
  },
  heading: {
    marginTop: "5vh",
  },
  textField: {
    marginTop: 20,
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
      loading: false,
      errors: {},
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const loginDetails = {
      Email: this.state.email,
      passwd: this.state.password,
      confPasswd: this.state.confpasswd,
      handle: this.state.username,
      branch: this.state.branch,
      phoneNo: this.state.phoneNo,
      sem: this.state.sem,
    };
    axios
      .post("/signup", loginDetails)
      .then((res) => {
        console.log(res.data);
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({
          errors: error.response.data,
          loading: false,
        });
      });
  };
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;
    const { loading, errors } = this.state;
    console.log(errors);
    return (
      <div>
        <Grid container className={classes.form} spacing={4}>
          <Grid item sm></Grid>
          <Grid item sm>
            <Typography variant="h3" className={classes.heading}>
              Sign Up
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <Grid container spacing={2} direction="column">
                <Grid item xs>
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
                    helperText={errors.username}
                    error={errors.username ? true : false}
                    fullWidth
                  />
                </Grid>
                <Grid item xs>
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
                </Grid>
                <Grid item sm direction="row">
                  <Select
                    label="Branch"
                    id="branch"
                    name='branch'
                    value={this.state.branch}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={"CSE"}>Computer Science</MenuItem>
                    <MenuItem value={"EC"}>Electronics And Communication</MenuItem>
                    <MenuItem value={"EEE"}>Electrical And Electronics</MenuItem>
                    <MenuItem value={"ME"}>Mechanical Engineering</MenuItem>
                    <MenuItem value={"CE"}>Civil Engineering</MenuItem>
                    <MenuItem value={"AE"}>Applied Electronics</MenuItem>
                    <MenuItem value={"IE"}>Industrial Engineering</MenuItem>
                    <MenuItem value={"ARCHI"}>Architecture</MenuItem>
                  </Select>

                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={this.state.sem}
                    onChange={this.handleChange}
                  >
                    <MenuItem value={"S1"}>Ten</MenuItem>
                    <MenuItem value={"S2"}>Twenty</MenuItem>
                    <MenuItem value={"S3"}>Thirty</MenuItem>
                    <MenuItem value={"S4"}>Ten</MenuItem>
                    <MenuItem value={"S5"}>Twenty</MenuItem>
                    <MenuItem value={"S6"}>Thirty</MenuItem>
                    <MenuItem value={"S7"}>Ten</MenuItem>
                    <MenuItem value={"S8"}>Twenty</MenuItem>
                    <MenuItem value={"S9"}>Thirty</MenuItem>
                  </Select>
                </Grid>
              </Grid>
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

export default withStyles(styles)(Signup);
