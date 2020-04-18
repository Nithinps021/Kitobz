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
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import LinearProgress from "@material-ui/core/LinearProgress";

// Redux imports
import { addBook, addimg } from "../Redux/actions/dataActions";
import { connect } from "react-redux";

const style = {
  form: {
    textAlign: "center",
  },
  textField: {
    marginTop: 0,
    color: "white",
  },
  buttonStyle: {
    marginTop: "2vh",
    marginBottom: "2vh",
  },
  text: {
    color: "#00000",
  },
  label: {
    marginTop: 7,
  },
  selector: {
    minWidth: 150,
  },
  action: {
    alignSelf: "center",
  },
  input: {
    content: "Upload Image",
    outline: "none",
  },
};

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
      open: false,
    };
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      phoneNo: nextProps.user.userDetails.phoneNo,
    });
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
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleSubmit = () => {
    const bookData = {
      bookname: this.state.bookname,
      branch: this.state.branch,
      whichsem: this.state.forsem,
      status: this.state.status,
      price: this.state.price,
      phoneNo: this.props.user.userDetails.phoneNo,
      imgURL:
        this.props.bookstatus.imgURL ||
        "https://firebasestorage.googleapis.com/v0/b/fir-fbb84.appspot.com/o/book.jpg?alt=media",
    };
    console.log(bookData);
    this.props.addBook(bookData);
  };
  handleImageChange = (event) => {
    const image = event.target.files[0];
    const formDate = new FormData();
    formDate.append("image", image, image.name);
    this.props.addimg(formDate);
    this.setState({
      imgURL: this.props.bookstatus.imgURL,
    });
    console.log(this.state);
  };
  render() {
    const {
      classes,
      bookstatus: { imgURL, added, loading },
    } = this.props;

    return (
      <Fragment>
        <Tooltip title="Add Book" placement="top">
          <IconButton onClick={this.handleOpen} className={classes.button}>
            <AddIcon color="secondary"></AddIcon>
          </IconButton>
        </Tooltip>
        {added && (
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            maxWidth="sm"
          >
            <DialogContent>
              <DialogContentText className={classes.text}>
                <Typography variant="h7">
                  The Book has been successfully Added.
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions className={classes.action}>
              <Button
                onClick={this.handleClose}
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
          <DialogTitle className={classes.form}>Add Book Details</DialogTitle>
          <DialogContent>
            <form>
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
                    placeholder="Use short Names"
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
                    name="forsem"
                    value={this.state.forsem}
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
                    type=""
                    name="price"
                    label="Price"
                    className={classes.textField}
                    value={this.state.price}
                    onChange={this.handleChange}
                    color="secondary"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <InputLabel htmlFor="imageinput" className={classes.label}>
                    Upload an Image
                  </InputLabel>
                  <input
                    type="file"
                    id="imageinput"
                    onChange={this.handleImageChange}
                    className={classes.input}
                  ></input>
                </Grid>
              </Grid>
            </form>
          </DialogContent>
          <DialogActions className={classes.action}>
            <Button
              onClick={this.handleSubmit}
              color="secondary"
              variant="contained"
              className={classes.buttonStyle}
              disabled={loading}
            >
              Add
            </Button>
            <Button
              onClick={this.handleClose}
              color="secondary"
              variant="contained"
              className={classes.input}
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
  user: state.user,
  bookstatus: state.data,
});

const mapActionToProp = { addBook, addimg };

export default connect(
  mapStateToProp,
  mapActionToProp
)(withStyles(style)(AddBook));
