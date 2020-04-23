import React, { Component, Fragment } from "react";


// redux imports
import {connect} from 'react-redux'
import {getUserData} from '../Redux/actions/userActions'
import {userBooks} from "../Redux/actions/dataActions";

// components imports
import MyBook from "../components/myBook";
import NavBar from "../components/NavBar";

// Mui imports
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import { Typography } from "@material-ui/core";

export class MyBooks extends Component {

  componentDidMount(){
    this.props.getUserData();
    this.props.userBooks();
  }
  render() {
    const {books:{books,notnull},ui:{loading}}=this.props;
    var listBooks = books.map(ele =><MyBook id={ele.bookId} details={ele}></MyBook>)
    console.log(books)
    return (
      <div>
        <NavBar />
        <span style={{ marginTop: 0 }}>
          {loading && <LinearProgress color="secondary" />}
        </span>
        <div style={{ marginTop: "10vh", padding: "3vw" }}>
          <Grid container>
            <Grid item lg={3} md={2}></Grid>
            <Grid item lg={6} md={6} xs={12}>
              {!notnull && books.length === 0 ? (
                <span>
                  <Typography variant="h6">No Book added yet..</Typography>
                </span>
              ) : (
                ""
              )}
              {listBooks}
            </Grid>
            <Grid item lg={3} md={2}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps=(state)=>({
  ui:state.ui,
  books:state.data
})

const mapActionToProp={getUserData,userBooks}

export default connect(mapStateToProps, mapActionToProp)(MyBooks);
