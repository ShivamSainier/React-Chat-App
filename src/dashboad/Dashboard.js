import React from 'react'
import Chat from "../chat/Chat"
import {Paper,FormControl,InputLabel,Input,Typography,Button ,CssBaseline } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import style from './style';
import firebase from 'firebase'
import {Link} from "react-router-dom"


class DashBoardComponent extends React.Component{
    constructor(props) {
        super(props)
    
        this.state = {
             selectedChat:null,
             newChatFromVisible:false,
             email:null,
             chats:[]
        }
    }
    
    render(){
        return (
            <>
            <h2>Hello from the dashboard</h2>
                <Chat  newChatBtnClickedFn={this.newChatBtnClicked} selectChatFn={this.selectChat}
                chat={this.state.chats} 
                userEmail={this.state.email}
                 selectedChatIndex={this.state.selectedChat}/>
            </>

        )
    }
    newChatBtnClicked=()=>{
        this.setState({ newChatFromVisible:true,selectChat:null})
        console.log('new chat button clicked')
    }
    selectChat=(chatIndex)=>{
        console.log('selected a Chat',chatIndex )
    }
    componentDidMount=()=>{
        firebase.auth().onAuthStateChanged( async _usr=>{
            if (!_usr)
            this.props.history.push('/login')
            else{
             await firebase.firestore().collection('chats').where('users','array-contains',_usr.email)
             .onSnapshot(async res=>{
                 const usr_chats=res.docs.map(_docs=>_docs.data())
                 await this.setState({
                     email:_usr.email,
                     chats:usr_chats
                 })
                 console.log(this.state)
             });
            
            
            
            
            }
        }

        )


    }
}
export default DashBoardComponent