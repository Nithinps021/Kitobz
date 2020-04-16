import React, { Component } from 'react'
//material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

// material ui imports

import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

// redux Imports
import { logoutUser } from '../Redux/actions/userActions';
import { connect } from "react-redux";


export class NavBar extends Component {
    constructor(props){
        super(props);
    }
    hadndleLogout = ()=>{
        this.props.logoutUser();
    }
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar className ="nav-container">
                        <Button color ="inherit">Login</Button>
                        <Button color ="inherit">SignUp</Button>
                        <Button color ="inherit">home</Button>
                        <Tooltip title="Logout" placement="bottom-start">
                            <IconButton onClick={this.hadndleLogout}>
                                <KeyboardReturnIcon color="secondary"></KeyboardReturnIcon>
                            </IconButton>
                        </Tooltip>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}
const mapStateToProps=(state)=>({
    user:state.user
})

const mapActionToProps={logoutUser}

export default connect(mapStateToProps,mapActionToProps)(NavBar);
