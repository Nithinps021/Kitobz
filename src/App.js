import React from 'react';
import {Route,Switch,BrowserRouter as Router} from 'react-router-dom'; 
import './App.css';
import decoder from 'jwt-decode'
import axios from 'axios'

// redux
import store from './Redux/store'
import {Provider} from 'react-redux'
import {SET_AUTHENTICATED} from './Redux/type'
import {logoutUser} from './Redux/actions/userActions'

//pages
import Home from './pages/home.jsx';
import AuthRoute from './util/AuthRoute.jsx'
import HomeRoute from './util/homeRoute.jsx'
import MyBooks from './pages/MyBooks'
import Profile from "./pages/profile";
import Kitobz from './pages/kitobz';

// MUI imports
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";


const Theme = createMuiTheme({
  palette: {
    primary: {
      main: "#323232",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ff1e56",
      contrastText: "#fff",
    },
    ternary: {
      main: "#BEBEBE",
      contrastText: "#0000",
    },
  },
  typography: {
    useNextVarients: true,
  },
  form: {
    // textAlign: "center",
    padding: 20,
  },
  heading: {
    marginTop: "5vh",
    textAlign: "center",
  },
  textField: {
    marginTop: 0,
    color: "white",
  },
  buttonStyle: {
    marginTop: "4vh",
    marginBottom: "2vh",
    position: "relative",
  },
  errorText: {
    color: "red",
    fontSize: "1rem",
    marginTop: 10,
  },
  progress: {
    position: "absolute",
  },
  label: {
    marginTop: 7,
  },
  selector: {
    minWidth: 150,
  },
  ref: {
    textAlign: "center",
  },
});

axios.defaults.baseURL = "https://us-central1-fir-fbb84.cloudfunctions.net/api";

const token = localStorage.FBToken
if(token){
  const decodedVal = decoder(token);
  console.log(decodedVal)
  if(decodedVal.exp*1000 < Date.now()){
    store.dispatch(logoutUser)
    window.location.href = '/'
  }
  else{
    store.dispatch({type:SET_AUTHENTICATED});
    axios.defaults.headers.common['Authorization']=token;
  }  
}
function App() {
  return (  
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <MuiThemeProvider theme={Theme}>
              <AuthRoute exact path="/" component={Kitobz}></AuthRoute>     
              {/* <Route exact path='/' component={Kitobz}></Route> */}
              <HomeRoute exact path="/home" component={Home}></HomeRoute>
              <HomeRoute exact path="/mybooks" component={MyBooks} />
              <HomeRoute exact path="/profile" component={Profile} />
            </MuiThemeProvider>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
export default App;
