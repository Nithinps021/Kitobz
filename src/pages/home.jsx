import React, { Component } from "react";
import axios from "axios";

import NavBar from "../components/NavBar.jsx";
import "../css/home.css";
import BookCard from "../components/BookCard";
// materila ui
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";
import LinearProgress from '@material-ui/core/LinearProgress';

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
    allbooks:null,
    loading:true
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
    var books;
    let {loading} = this.state.loading;
    if(this.state.allbooks){
      books = this.state.allbooks.map(ele => <BookCard key = {ele.bookId} bookinfo={ele} />);
      loading=false;
    }
    else{
      loading=true
    }
    return (
      <div>
        <MuiThemeProvider theme={Theme}>
          <NavBar></NavBar>
          <div style={{ marginTop: "9vh"}}>
            {loading && <LinearProgress color='secondary'/>}
          </div>
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
