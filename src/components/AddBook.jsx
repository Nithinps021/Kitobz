import React, { Component, Fragment } from "react";

// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AddIcon from "@material-ui/icons/Add";

// Redux imports
import { addBook } from "../Redux/actions/dataActions";
import { connect } from "react-redux";

const style = {};

class AddBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookname: "",
      price: "",
      forsem: "",
      branch: "",
      phoneNo: this.props.user.userDetails.phoneNo,
      status: "Available",
      imgURL: this.props.bookstatus.imgURL,
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
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Tooltip title="Add Book" placement="top">
          <IconButton onClick={this.handleOpen} className={classes.button}>
            <AddIcon color="secondary"></AddIcon>
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <DialogTitle>Add Book Details</DialogTitle>
          <DialogContent>
            <form>
              {/* <TextField
                name="bookname"
                type="text"
                label="Book Name"
                multiline
                rows="3"
                className={classes.textField}
                value={this.state.bookname}
                fullWidth
              ></TextField> */}
               <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    type="text"
                    name="bookname"
                    label="Book Name"
                    className={classes.textField}
                    value={this.state.bookname}
                    onChange={this.handleChange}
                    color="secondary"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputLabel id="branchlabel" className={classes.label}>
                    For Branch
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
                <Grid item xs={12}>
                  <InputLabel htmlFor="semester" className={classes.label}>
                    For Semester
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
                    type="text"
                    name="price"
                    label="Price"
                    className={classes.textField}
                    value={this.state.price}
                    onChange={this.handleChange}
                    color="secondary"
                    fullWidth
                  />
                </Grid>   
              </Grid>
            </form>
          </DialogContent>
          <DialogActions>
              <Button onChange={this.handleSubmit} color="secoundary">
                  Add
              </Button>
              <Button onChange={this.handleClose}>
                  Cancel
              </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
const mapStateToProp = (state) => ({
  user: state.user,
  bookstatus: state.data,
});

const mapActionToProp = { addBook };

export default connect(
  mapStateToProp,
  mapActionToProp
)(withStyles(style)(AddBook));
