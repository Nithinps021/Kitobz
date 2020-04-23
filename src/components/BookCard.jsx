import React, { Component, Fragment } from "react";

//material ui
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import CardActionArea from "@material-ui/core/CardActionArea";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import FavoriteIcon from "@material-ui/icons/Favorite";



const style = (theme) => ({
  card: {
    height: 350,
  },
  image: {
    height: 220,
  },
  status: {
    textAlign: "end",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
  },
  dialogue: {
    width: "10vw",
    overflow: "hidden",
  },
  imgDialogue: {
    height: 250,
  },
  heading:{
    textAlign:"center",
  },
  icon:{
    padding:0,
    margin:0
  }
});

class BookCard extends Component {
  state = {
    open: false,
    wish: false,
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
    const { classes, bookinfo } = this.props;
    const {
      bookId,
      bookname,
      imgURL,
      price,
      status,
      forsem,
      branch,
      username,
      date,
      phoneNo
    } = bookinfo;
    let bname;
    for (let i = 0; i < Branch.length; i++) {
      if (Branch[i].short == branch) {
        bname = Branch[i].name;
        break;
      }
    }
    const handleWishlist = () => {
      if(this.state.wish==false){
        this.setState({
          wish: true,
        });
      }
      else{
         this.setState({
           wish: false,
         });
      }
    };
    return (
      <Fragment>
        <Grid item xs={6} sm={4} md={3} lg={2}>
          <Paper elevation={15}>
            <Card id={bookId} className={classes.card}>
              <CardActionArea onClick={this.handleOpen}>
                <CardMedia
                  image={imgURL}
                  title="Book Image"
                  className={classes.image}
                />
              </CardActionArea>
              <CardContent>
                <Grid container direction="row">
                  <Grid item xs={12}>
                    <Typography variant="body1">{bookname}</Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.status}>
                    <Typography variant="h6">₹ {price}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <IconButton
                      onClick={handleWishlist}
                      className={classes.icon}
                    >
                      <FavoriteIcon
                        color={this.state.wish ? "secondary" : "ternary"}
                      />
                    </IconButton>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography varient="body1" className={classes.status}>
                      {status}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Paper>
        </Grid>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          maxWidth="sm"
          fullWidth
          className={classes.Dialog}
        >
          <DialogTitle className={classes.heading}>Book Details</DialogTitle>
          <DialogTitle>
            <IconButton
              onClick={this.handleClose}
              className={classes.closeButton}
            >
              <CloseIcon color="secondary"></CloseIcon>
            </IconButton>
          </DialogTitle>
          <DialogContent>
            <Grid container direction="row" spacing={3}>
              <Grid item xs={4}>
                <Card>
                  <CardMedia
                    image={imgURL}
                    title="Book Image"
                    className={classes.imgDialogue}
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={2}>
                  <Grid item xs={8}>
                    <Typography variant="h6">{bookname}</Typography>
                  </Grid>
                  <IconButton onClick={handleWishlist} className={classes.icon}>
                    <FavoriteIcon
                      color={this.state.wish ? "secondary" : "ternary"}
                    />
                  </IconButton>
                  <Grid item xs={6}>
                    <Typography>Seller</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{username}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>For Semester</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{forsem}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>For Brach</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{bname}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Price</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>₹ {price}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Contact</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{phoneNo}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Posted On</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{date}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>Status</Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography>{status}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const Branch = [
  { short: "CSE", name: "Computer Science" },
  { short: "ME", name: "Mechanical Engineering" },
  { short: "EC", name: "Electronic and Communication" },
  { short: "EEE", name: "Electrical Engineering" },
  { short: "CE", name: "Civil Engineering" },
  { short: "ARCHI", name: "Architecture" },
];

export default withStyles(style)(BookCard);
