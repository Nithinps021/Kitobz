import React, { Component } from "react";
import axios from "axios";

import NavBar from "../components/NavBar.jsx";
import "../css/home.css";
import BookCard from "../components/BookCard";

import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";

const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#323232",
      contrastText: "#fff"
    },
    secondary: {
      main: "#ff1e56",
      contrastText: "#fff"
    }
  },
  typography: {
    useNextVarients: true
  }
});

class home extends Component {
  state = {
    Allbooks:[
      {
        bookId:1323,
        bookname:"Linear Equation and Probability",
        branch:"CSE",
        forsem:"S4",
        imgURL:" https://firebasestorage.googleapis.com/v0/b/fir-fbb84.appspot.com/o/995801706070.jpeg?alt=media",
        price:200,
        status:"Available"
      }
    ],
    allbooks:null,
  };

  componentDidMount() {
    axios
      .get("/allbooks")
      .then(res => {
        console.log(res);
        this.setState({
          allbooks: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    // let books = this.state.allbooks ? (
    //   this.state.allbooks.map(ele => <BookCard bookinfo={ele} />)
    // ) : (
    //   <p>Loding</p>
    // );
    let books = this.state.Allbooks.map(ele =><BookCard bookinfo={ele} />)

    return (
      <div>
        <MuiThemeProvider theme={Theme}>
          <NavBar></NavBar>
          <div style={{ marginTop: "15vh", padding: "3vw" }}>
            <Grid
              container
              spacing={3}
              direction="row"
              className="grid-container"
            >
                {books}
            </Grid>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
export default home;
