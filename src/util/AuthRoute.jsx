import React from 'react'
import {Route ,Redirect} from 'react-router-dom';
import {connect} from 'react-redux'

const AuthRoute = ({component:Componenet,authenticated, ...rest }) =>(
    <Route
        {...rest}
        render={(props) => authenticated === true ? <Redirect to ='/' /> : <Componenet {...props} />}
    />

)
const mapStateToProp = (state)=>({
    authenticated:state.user.authentication
})

export default connect(mapStateToProp)(AuthRoute);
