import React from 'react'
import {Paper,FormControl,InputLabel,Input,Typography,Button ,CssBaseline,List,ListItem,ListItemAvatar,Avatar, ListItemText, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import firebase from 'firebase'
import {Link} from "react-router-dom"
import styles from "./style"


class Chat extends React.Component {
    render() {
        const {classes}=this.props 
        return (
            <div className={classes.root}>
                <Button variant="contained" fullWidth color="primary" className={classes.newChatBtn} onClick={this.newChat }></Button>
                <List>{
                    this.props.chat.map((_chat,_index)=>{
                        return (
                        <div key={_index}>
                        <ListItem onClick={()=>this.selectChat(_index)} className={classes.listItem} 
                        selected={this.props.selectedChatIndex===_index}
                        alignItems='flex-start'>
                        <ListItemAvatar>
                        <Avatar alt="saini">
                            {_chat.users.filter(_user=>_user!==this.props.userEmail)[0].split('')[0]}
                        </Avatar>
                        </ListItemAvatar>
                         <ListItemText primary={_chat.users.filter(_user=>_user!==this.props.userEmail)[0]} 
                         secondary={
                             <>
                             <Typography>
                                 {
                                     _chat.messages[_chat.messages.length]
                                 }
                             </Typography>
                             </>
                         }>
                         </ListItemText>
                        
                            </ListItem>
 
                            </div>
                            
                        )
                    })
                }
                </List>
            </div> 
        )
    }
    newChat=()=>{

    }
    selectChat=(index)=>{
        this.props.selectChatFn(index)

    }
}

export default withStyles(styles)(Chat)
