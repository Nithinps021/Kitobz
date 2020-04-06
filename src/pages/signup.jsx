import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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

const styles = {
  form: {
    // textAlign: "center",
    padding: 20,
  },
  heading: {
    marginTop: "5vh",
    textAlign: "center",
  },
  textField: {
    marginTop: 0,
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
  label: {
    marginTop: 7,
  },
  selector: {
    minWidth: 150,
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
        <Grid container className={classes.form}>
          <Grid item sm></Grid>
          <Grid item sm>
            <Typography variant="h3" className={classes.heading}>
              Sign Up
            </Typography>
            <form noValidate onSubmit={this.handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={6}>
                  <InputLabel id="branchlabel" className={classes.label}>
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
                <Grid item xs={6}>
                  <InputLabel htmlFor="semester" className={classes.label}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
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
                <Grid item xs={12}>
                  <TextField
                    type="confPasswd"
                    id="confPasswd"
                    name="confPasswd"
                    label="Confirm Password"
                    key="confPasswd"
                    className={classes.textField}
                    value={this.state.confPasswd}
                    onChange={this.handleChange}
                    color="secondary"
                    size="medium"
                    helperText={errors.confPasswd}
                    error={errors.confpasswd ? true : false}
                    fullWidth
                  />
                </Grid>
              </Grid>
             <div className={classes.ref}>
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
             </div>
            </form>
            <br></br>
            <div className={classes.ref}>
              <small>
                Already have an account ? Login <Link to="/login">Here</Link>
              </small>
            </div>
          </Grid>
          <Grid item sm></Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Signup);
