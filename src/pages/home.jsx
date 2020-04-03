import React, { Component } from 'react'
import axios from 'axios';

import NavBar from '../components/NavBar.jsx';
import '../css/home.css'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper'

const Theme = createMuiTheme({
    palette: {
        primary: {
          main: '#323232',
          contrastText:"#fff"
        },
        secondary: {
          main: '#ff1e56',
          contrastText:"#fff"
        },
    },
    typography:{
      useNextVarients:true
    }
})

 class home extends Component {

  state ={
    allbooks:null,
  }

  componentDidMount(){
    axios.get('/allbooks')
    .then(res => {
      console.log(res)
      this.setState({
        allbooks:res.data  
      })
    })
    .catch(error =>{
      console.log(error)
    })
  }

    render() {
      let books = this.state.allbooks ? (
        this.state.allbooks.map(ele => {
          return(
            <ul>
              <h4>{ele.bookname}</h4>
              <li>{ele.forsem}</li>
              <li>{ele.username}</li>
            </ul>  
          )
        })
      ): <p>Loding</p> 
        

      
      return (
            <div>
              <MuiThemeProvider theme ={Theme}>
                  <NavBar></NavBar>
                  <div style={{marginTop:"7vw",paddingLeft:"5vw"}}>
                  <Grid container spacing={3} direction="row" className="grid-container"> 
                </Grid>
                  </div>
              </MuiThemeProvider>
             
            </div>
        )
    }
}
export default home;