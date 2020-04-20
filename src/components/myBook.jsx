import React, { Component, Fragment } from "react";

// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Tooltip from "@material-ui/core/Tooltip";

const styles = (theme) => ({
  img: {
    height: 150,
  },
  iconbutton:{
    padding:0,
    margin:0,
  },
  buttonDiv:{
    alignSelf:"end",
    padding:"0",
    margin:"0",
  }
});

export class myBook extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Grid item xs={12}>
          <Paper elevation={3}>
            <Card>
              <Grid container spacing={3}>
                <Grid item xs={3}>
                  <CardMedia
                    image="https://firebasestorage.googleapis.com/v0/b/fir-fbb84.appspot.com/o/892149701282.jpg?alt=media"
                    className={classes.img}
                  />
                </Grid>
                <Grid item direction="column">
                  <CardContent>
                    <Typography variant="h5">My BOOK name</Typography>
                    <Typography variant="body1"> price 156 </Typography>
                    <Typography variant="body1"> Status available </Typography>
                    <div className={classes.buttonDiv}>
                      <IconButton>
                        <Tooltip title="Delete">
                          <DeleteIcon
                            color="secondary"
                            className={classes.iconbutton}
                          />
                        </Tooltip>
                      </IconButton>
                      <IconButton>
                        <Tooltip title="Edit">
                          <EditIcon
                            color="secondary"
                            className={classes.iconbutton}
                          />
                        </Tooltip>
                      </IconButton>
                    </div>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Paper>
        </Grid>
      </Fragment>
    );
  }
}

export default withStyles(styles)(myBook);
