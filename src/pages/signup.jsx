import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios'


// MUI imports
import Grid from '@material-ui/core/Grid'
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';


const styles ={
    form:{
        textAlign:'center'
    },
    heading:{
        marginTop:'5vh'
    },
    textField:{

        marginTop:30,
        color:'white'
    },
    buttonStyle:{
        marginTop:'4vh',
        marginBottom:'2vh',
        position:'relative'
    },
    errorText:{
        color:'red',
        fontSize:'1rem',
        marginTop:10
    },
    progress:{
        position:'absolute'
    }
}
class Signup extends Component {
    constructor(props){
        super(props);
        this.state ={
            email:'',
            password:'',
            confPasswd:'',
            username:'',
            phoneNo:'',
            branch:'',
            sem:'',
            loading:false,
            errors:{},
        }
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        this.setState({
            loading:true,
        })
        const loginDetails ={
            Email:this.state.email,
            passwd:this.state.password,
            confPasswd:this.state.confpasswd,
            handle:this.state.username,
            branch:this.state.branch,
            phoneNo:this.state.phoneNo,
            sem:this.state.sem,
        }
        axios.post('/signup',loginDetails)
            .then(res =>{
                console.log(res.data)
                this.setState({
                    loading:false,
                })
                this.props.history.push('/')
            })
            .catch(error =>{
                this.setState({
                    errors:error.response.data,
                    loading:false
                })
            })
    }
    handleChange = (event)  =>{
        this.setState({
         [event.target.name]:event.target.value   
        })
    }
    render() {
        const {classes} = this.props;
        const {loading,errors}=this.state;
        console.log(errors)
        return (
            <div>  
                <Grid container className ={classes.form} spacing ={4}>
                    <Grid item sm></Grid>
                    <Grid item sm >
                        <Typography variant='h3'className={classes.heading} >Sign Up</Typography>
                        <form noValidate onSubmit ={this.handleSubmit}> 
                           
                        </form>
                        <br></br>
                        <small>Dont have an account ? sign up <Link to ='/signup' >Here</Link></small>
                    </Grid>
                    <Grid item sm></Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(Signup)
