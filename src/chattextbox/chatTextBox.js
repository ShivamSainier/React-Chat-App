import {TextField ,Paper,FormControl,InputLabel,Input,Typography,Button ,CssBaseline,List,ListItem,ListItemAvatar,Avatar, ListItemText, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import {Link} from "react-router-dom"
import styles from "./style"
import React, { Component } from 'react'

export class ChatTextBox extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             chatText:""
        }
    }
    
    
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
        e.typeCode==13?
        this.submitMessage():
        console.log("user typing")
        this.setState({chatText:e.target.value})

    }
    messageValid=(txt)=> txt && txt.replace(/\s/g,' ').length;
    userClickedInput(e){
        console.log('user clicked input')
    }
    submitMessage=()=>{
        
        console.log('submit')
        if (this.messageValid(this.state.chatText)){
            this.props.submitMessageFn(this.state.chatText)
            document.getElementById('chattextbox').value=" ";
        }
    }
}

export default withStyles(styles)(ChatTextBox)
