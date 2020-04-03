import React, { Component } from "react";

//material ui
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const style = {
  card: {
    display: "flex"
  },
  image: {
      height:200,
      objectFit:"cover"

  },
};

class BookCard extends Component {
  render() {
    const { classes, bookinfo } = this.props;
    const {
      bookId,
      bookname,
      branch,
      forsem,
      imgURL,
      price,
      status
    } = bookinfo;
    return (
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card id={bookId}>
          <CardMedia image={imgURL} title="Book Image" className={classes.image}/>
          <CardContent>
          <Typography variant="h5">{bookname}</Typography>
            <Grid container direction='row' spacing={1}>
                <Grid item xs={12} >
                <Typography variant="h5" >₹  {price}</Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography varient="body1">Status {status}</Typography>
                </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default withStyles (style)(BookCard);
