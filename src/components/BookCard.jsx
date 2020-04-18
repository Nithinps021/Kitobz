import React, { Component } from "react";

//material ui
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const style = {
  card: {
    height: 340,
 
  },
  image: {
    height: 220,
    objectFit: "cover",

  },
  status: {
    textAlign: "end",
  },
};

class BookCard extends Component {
  render() {
    const { classes, bookinfo } = this.props;
    const { bookId, bookname, imgURL, price, status } = bookinfo;
    return (
      <Grid item xs={6} sm={4} md={3} lg={2}>
        <Paper elevation={4}>
          <Card id={bookId} className={classes.card}>
            <CardMedia
              image={imgURL}
              title="Book Image"
              className={classes.image}
            />
            <CardContent>
              <Grid container direction="row">
                <Grid item xs={12}>
                  <Typography variant="h7">{bookname}</Typography>
                </Grid>
                <Grid item xs={12} className={classes.status}>
                  <Typography variant="h6">₹ {price}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography varient="body1" className={classes.status}>
                    {status}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Paper>
      </Grid>
    );
  }
}

export default withStyles(style)(BookCard);
