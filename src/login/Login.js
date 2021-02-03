import React from 'react'
import {Paper,FormControl,InputLabel,Input,Typography,Button ,CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "./Style"
import {Link} from "react-router-dom"
import firebase from 'firebase'



class LoginComponent extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             email:null,
             password:null,
             loginError:" "
        }
    }
    render(){
        const {classes}=this.props;
        return (
            <>
            <main className={classes.main}>
                <CssBaseline></CssBaseline>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5">
                        Log in 
                    </Typography>
                    <form className={classes.form} onSubmit={(e)=>{this.submitLogin(e)}}>
                    <FormControl required fullWidth margin='normal'>
                        <InputLabel htmlfor="login-email-input">Enter Your Email</InputLabel>
                        <Input autoComplete="email" autoFocus id='login-email-input' onChange={(e)=>{this.userTyping('email',e)}}></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                    <InputLabel htmlfor="login-password-input">Enter Your password</InputLabel>
                    <Input type="password" id='login-password-input' onChange={(e)=>{this.userTyping('password',e)}}></Input>
                    </FormControl>
                    <Button type="submit" fullWidth variant='contained' color="primary" className={classes.submit}>Log in</Button>
                    { 
                           this.state.loginError ? 
                           <h4 className={classes.errorText} component='h5' variant='h6'>
                             {this.state.loginError}
                           </h4> :
                           null
                         }
                    </form>
                    <h5 className={classes.hasAccountHeader}>Don't have an account?</h5>
                    <Link  className={classes.logInLink} to="/signup">Sign up</Link>
                </Paper>
            </main>
            </>
        )
    }
    userTyping(type,e){
        
        switch (type) {
            case 'email':
                this.setState({email:e.target.value})
                break;
            case 'password':
                this.setState({password:e.target.value})
                break
        }
    }
    submitLogin=async (e)=>{
        e.preventDefault()
        firebase
        .auth()
        .signInWithEmailAndPassword(this.state.email,this.state.password)
        .then(()=>{
                this.props.history.push("/dashboard")}
        ,error=>{
            this.setState({loginError:error.message})
            console.log(error.message)
        });
    }

}
export default withStyles(styles)(LoginComponent)