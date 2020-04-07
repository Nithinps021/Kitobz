import React from 'react';
import {Route ,Switch,BrowserRouter as Router} from 'react-router-dom'; 
import './App.css';
import decoder from 'jwt-decode'
import axios from 'axios'

// redux
import store from './Redux/store'
import {Provider} from 'react-redux'
import {SET_AUTHENTICATED} from './Redux/type'
import {logoutUser} from './Redux/actions/userActions'

//pages
import Signup from './pages/signup.jsx';
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import AuthRoute from './util/AuthRoute.jsx'
import HomeRoute from './util/homeRoute.jsx'


const token = localStorage.FBToken
if(token){
  const decodedVal = decoder(token);
  console.log(decodedVal)
  if(decodedVal.exp*1000 < Date.now()){
    store.dispatch(logoutUser)
    window.location.href = '/login'
  }
  else{
    store.dispatch({type:SET_AUTHENTICATED});
    axios.defaults.headers.common['Authenticated']=token;
  }  
}
function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <Router>
          <Switch>
            <AuthRoute exact path="/login" component ={Login}></AuthRoute>
            <AuthRoute exact path="/signup" component ={Signup}></AuthRoute>
            <HomeRoute exact path="/" component ={Home}></HomeRoute>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
export default App;
