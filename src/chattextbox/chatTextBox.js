import {TextField ,Paper,FormControl,InputLabel,Input,Typography,Button ,CssBaseline,List,ListItem,ListItemAvatar,Avatar, ListItemText, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import {Link} from "react-router-dom"
import styles from "./style"
import React, { Component } from 'react'

export class ChatTextBox extends Component {
    
    render() {
        const {classes}=this.props
        return (
            <div className={  classes.chatTextBoxContainer}>
             <TextField placeholder="Type your message ..."
             onKeyUp={(e)=>this.userTyping(e)}
             id="chattextbox" className={classes.chatTextBox}
             onFocus={this.userClickedInput}> </TextField> 
             <Button onClick={this.submitMessage} className={classes.sendBtn}>send</Button>
            </div>
        )

    }
    userTyping(e){
        console.log("user typing")
    }
    userClickedInput(e){
        console.log('user clicked input')
    }
    submitMessage=()=>{
        console.log('submit')
    }
}

export default withStyles(styles)(ChatTextBox)
