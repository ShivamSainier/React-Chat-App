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
                <main className={classes.contents}>
                    {
                         chat.messages.map((_msg,_index)=>{
                             return (
                                 <div key={_index} className={_msg.sender===user?classes.userSent:classes.friendSent}> 
                                 {
                                        _msg.message
                                        
                                 }</div>
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
