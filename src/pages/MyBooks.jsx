import React, { Component, Fragment } from "react";

// components imports
import MyBook from "../components/myBook";
import NavBar from "../components/NavBar";

// Mui imports
import Grid from "@material-ui/core/Grid";

export class MyBooks extends Component {
  render() {
    return (
      <div style={{ marginTop: "10vh", padding: "3vw" }}>
        <NavBar />
        <Grid container >
          <Grid item ls={3} md={2}></Grid>
          <Grid item ls={6} md={6} xs={12}>
            <MyBook />
          </Grid>
          <Grid item ls={3} md={2}></Grid>
        </Grid>
      </div>
    );
  }
}

export default MyBooks;
