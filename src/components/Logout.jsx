import React, { Component, Fragment } from "react";

//material ui imports
import { Button } from "@material-ui/core";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import withStyles from "@material-ui/core/styles/withStyles";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";

// redux Imports
import { logoutUser } from "../Redux/actions/userActions";
import { connect } from "react-redux";

const styles = {
  action: {
    alignSelf: "center",
    padding: 15,
  },
  buttonStyle: {
    marginTop: "2vh",
    marginBottom: "2vh",
  },
};

export class Logout extends Component {
  state = {
    open: false,
  };
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
        <Tooltip title="Logout" placement="bottom-start">
          <IconButton onClick={this.handleOpen}>
            <KeyboardReturnIcon color="secondary"></KeyboardReturnIcon>
          </IconButton>
        </Tooltip>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose.close}
          maxWidth="sm"
        >
          <DialogTitle>Are you sure you want to logout?</DialogTitle>
          <DialogActions className={classes.action}>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.props.logoutUser}
              classes={classes.buttonStyle}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClose}
              classes={classes.buttonStyle}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapActionToProps = { logoutUser };

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(Logout));
