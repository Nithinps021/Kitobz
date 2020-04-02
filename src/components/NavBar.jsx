import React, { Component } from 'react'

//material ui imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';



export class NavBar extends Component {
    render() {
        return (
            <div>
                <AppBar>
                    <Toolbar>
                        <Button color ="inherit">Login</Button>
                        <Button color ="inherit">SignUp</Button>
                        <Button color ="inherit">Home</Button>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default NavBar;
