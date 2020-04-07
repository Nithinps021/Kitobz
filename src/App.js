import React from 'react';
import {Route ,Switch,BrowserRouter as Router} from 'react-router-dom'; 
import './App.css';
import decoder from 'jwt-decode'

// redux
import store from './Redux/store'
import {Provider} from 'react-redux'


//pages
import Signup from './pages/signup.jsx';
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';
import AuthRoute from './util/AuthRoute.jsx'


const token = localStorage.FBToken
let authenticated;
if(token){
  const decodedVal = decoder(token);
  console.log(decodedVal)
  if(decodedVal.exp*1000< Date.now()){
    window.location.href = '/login'
    authenticated=false
  }
  else{
    authenticated =true
  }  
}



function App() {
  return (
    <div className="App">
      <Provider store ={store}>
        <Router>
          <Switch>
            <Route exact path="/login" component ={Login}></Route>
            <AuthRoute exact path="/" component ={Home} authenticated ={authenticated}></AuthRoute>
            <AuthRoute exact path="/signup" component ={Signup} authenticated ={authenticated}></AuthRoute>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}
export default App;
