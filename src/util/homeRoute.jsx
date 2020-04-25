import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const homeRoute = ({ component: Componenet, authenticated, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      authenticated === true ? <Componenet {...props}/> : <Redirect to="/kitobz"/>
    }
  />
);
const mapStateToProp = (state) => ({
  authenticated: state.user.authentication,
});

export default connect(mapStateToProp)(homeRoute);
