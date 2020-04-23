import React, { Component, Fragment } from "react";

// components imports'
import DeleteBook from '../components/deleteBook'
import EditBook from './editBook'

// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  img: {
    height: 160,
    padding: 0,
  },
  content: {
    marginTop: 5,
  },
  buttonDiv: {
    marginLeft: "26vw",
    padding: "0",
    display: "flex",
  },
  cardContent: {
    padding: "0px",
  },
});

export class MyBook extends Component {
  render() {
    const { classes, details } = this.props;
    return (
      <Fragment>
        <Grid item>
          <Paper elevation={10} style={{ marginBottom: 30 }}>
            <Card>
              <Grid container spacing={3}>
                <Grid item md={3} ls={3} xs={4}>
                  <CardMedia image={details.imgURL} className={classes.img} />
                </Grid>
                <Grid item direction="column">
                  <CardContent className={classes.cardContent}>
                    <Typography variant="h5">{details.bookname}</Typography>
                    <Typography variant="body1" className={classes.content}>
                      {" "}
                      price {details.price}{" "}
                    </Typography>
                    <Typography variant="body1" className={classes.content}>
                      {" "}
                      Status {details.status}{" "}
                    </Typography>
                  </CardContent>
                  <span className={classes.buttonDiv}>
                    <EditBook details={details}></EditBook>
                    <DeleteBook bookid={details.bookId} name={details.bookname  } />
                  </span>
                </Grid>
              </Grid>
            </Card>
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(MyBook);
