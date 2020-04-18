import React, { Component } from "react";
import axios from "axios";
import  clsx from "clsx" 
 
import NavBar from "../components/NavBar.jsx";
import "../css/home.css";
import BookCard from "../components/BookCard";

// materila ui imports
// import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
// import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import Grid from "@material-ui/core/Grid";
import LinearProgress from "@material-ui/core/LinearProgress";
import withStyles from "@material-ui/core/styles/withStyles";

// redux imports
import { connect } from "react-redux";
import { getUserData } from "../Redux/actions/userActions";

// const Theme = createMuiTheme({
//   palette: {
//     primary: {
//       main: "#323232",
//       contrastText: "#fff"
//     },
//     secondary: {
//       main: "#ff1e56",
//       contrastText: "#fff"
//     }
//   },
//   typography: {
//     useNextVarients: true
//   }
// });

const drawerWidth = 180;

const styles = (theme) => ({
  content: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: drawerWidth,
  },
});

class home extends Component {
  state = {
    allbooks: null,
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/allbooks")
      .then((res) => {
        console.log(res);
        this.setState({
          allbooks: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.getUserData();
  }

  render() {
    var books;
    let { loading } = this.state.loading;
    const {classes} =this.props;
    if (this.state.allbooks) {
      books = this.state.allbooks.map((ele) => (
        <BookCard key={ele.bookId} bookinfo={ele} />
      ));
      loading = false;
    } else {
      loading = true;
    }
    return (
      <div>
        {/* <MuiThemeProvider theme={Theme}> */}
        <NavBar></NavBar>
        <div style={{ marginTop: 65 }}>
          {loading && <LinearProgress color="secondary" />}
        </div>
        <div style={{ marginTop: "15vh", padding: "3vw" }}>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: this.props.menu.open,
            })}
          >
            <Grid
              container
              spacing={3}
              direction="row"
              className="grid-container"
            >
              {books}
            </Grid>
          </main>
        </div>
        {/* </MuiThemeProvider> */}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  menu: state.ui,
});
const mapActionToProps = { getUserData };

export default connect(
  mapStateToProps,
  mapActionToProps
)(withStyles(styles)(home));
