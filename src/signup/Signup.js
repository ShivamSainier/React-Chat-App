import React from 'react'
import {Paper,FormControl,InputLabel,Input,Typography,Button ,CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './style';
import firebase from 'firebase'
import {Link} from "react-router-dom"



class SignupComponent extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             email:null,
             password:null,
             passwordConfirmation:null,
             signupError:""
        }
    }
    
    render(){
        const { classes } = this.props;
        return (
            <div>
                  <main className={classes.main}>
        <CssBaseline/>
        <Paper className={classes.paper}>
          <Typography component="h1" variant="h5">
            Sign Up!
          </Typography>
          <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-email-input'>Enter Your Email</InputLabel>
              <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='signup-email-input'></Input>
            </FormControl>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-password-input'>Create A Password</InputLabel>
              <Input type="password" onChange={(e) => this.userTyping('password', e)} id='signup-password-input'></Input>
            </FormControl>
            <FormControl required fullWidth margin='normal'>
              <InputLabel htmlFor='signup-password-confirmation-input'>Confirm Your Password</InputLabel>
              <Input type="password" onChange={(e) => this.userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'></Input>
            </FormControl>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>Submit</Button>
          </form>
          { 
            this.state.signupError ? 
            <h4 className={classes.errorText} component='h5' variant='h6'>
              {this.state.signupError}
            </h4> :
            null
          }
          <h5 className={classes.hasAccountHeader}>Already Have An Account?</h5>
          <Link  className={classes.signUpLink} to="/login">Log in</Link>
        </Paper>
      </main>
            </div>
        )
    }
    formisValid=()=>this.state.password===this.state.passwordConfirmation

    userTyping(type,e){
        switch(type){
            case 'email':
                this.setState({email:e.target.value})
                break;
            case 'password':
                this.setState({password:e.target.value})
                break;
            case 'passwordConfirmation':
                this.setState({passwordConfirmation:e.target.value})
                break
        }
        
    }
    submitSignup(e){
        e.preventDefault()
        console.log(this.state)
        if (!this.formisValid()){
            this.setState({passwordConfirmation:"password do not match"})
        }
        firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
        .then(
          authres=>{
            const usrobj={
              email:authres.user.email
            }
            firebase.firestore().collection('users').doc(this.state.email)
            .set(usrobj).then(()=>{this.props.history.push('/login  ')
          },dbError=>{
            console.log(dbError)
            this.setState({signupError:dbError.message})
          }
          )

          },authError=>{
            console.log('auth arror',authError)
            this.setState({signupError:authError.message})
          })
      }
}
export default withStyles(styles)(SignupComponent)
