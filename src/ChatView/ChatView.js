import React, { Component } from 'react'
import styles from "./style"
import { withStyles } from '@material-ui/core/styles';


export class ChatView extends Component {
    render() {
        const {classes,chat,user} = this.props
        if(chat===undefined){
            return (<main className={classes.contents}></main>)
        }
        else{
            return (
                <div>
                <div className={classes.chatHeader}>
                {
                    chat.users.filter(_user=>_user!==user)
                }
                </div>
                <main className={classes.content}>
                    {
                         chat.messages.map((msg,_index)=>{
                             return (
                                 <div key={_index} className={msg.sender===user ? classes.friendSent:classes.userSent}> 
                                 { msg.message }
                                </div>
                             )    
                         })
                    }
                </main>
                </div>
            )
        }
    }
}

export default withStyles(styles)(ChatView)
