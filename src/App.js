import React from 'react';
import {Route ,Switch,BrowserRouter as Router} from 'react-router-dom'

//pages
import Signup from './pages/signup.jsx';
import Login from './pages/login.jsx';
import Home from './pages/home.jsx';




function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component ={Home}></Route>
            <Route exact path="/login" component ={Login}></Route>
            <Route exact path="/signup" component ={Signup}></Route>
          </Switch>
        </Router>

    </div>
  );
}
export default App;
