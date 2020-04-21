import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { deleteBook } from "../Redux/actions/dataActions";

// mui imports
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import withStyles from '@material-ui/core/styles/withStyles'

const styles={
    align:{
        textAlign:"center",
        alignSelf:"center",
        marginBottom:10
    }
}

export class DeleteBook extends Component {
  state = {
    open1: false,
    open2: false,
  };
  handleOpen1 = () => {
    this.setState({
      open1: true,
    });
  };
  handleClose1 = () => {
    this.setState({
      open1: false,
      open2: false,
    });
  };
  handleRefresh=()=>{
      this.setState({
          open2:false,
      })
      window.location.reload(false)
  }

  render() {
    const {
      ui: { loading },
      classes
    } = this.props;
    const handleDelete = () => {
      const book = {
        bookId: this.props.bookid,
      };
      this.props.deleteBook(book);
      this.setState({
        open1: false,
        open2: true,
      });
    };
    return (
      <Fragment>
        <IconButton onClick={this.handleOpen1}>
          <DeleteIcon color="secondary" />
        </IconButton>
        <Dialog open={this.state.open1} onClose={this.handleClose1}>
          <DialogTitle className={classes.align}>
            Do you want to delete {this.props.name} ?
          </DialogTitle>
          <DialogActions className={classes.align}>
            <Button
              variant="contained"
              color="secondary"
              onClick={handleDelete}
            >
              Yes
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={this.handleClose1}
            >
              No
            </Button>
          </DialogActions>
        </Dialog>
        {!loading && this.state.open2 && (
          <Dialog open={this.state.open2} onClose={this.handleClose1} >
            <DialogTitle className={classes.align}>
              Book has been deleted
            </DialogTitle>
            <DialogActions className={classes.align}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleRefresh}
              >
                OK
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui,
});

const mapDispatchToProps = {
  deleteBook,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(DeleteBook));
