import React from 'react'
import Chat from "../chat/Chat"

class DashBoardComponent extends React.Component{
    
    render(){
        return (
            <>
            <h2>Hello from the dashboard</h2>
                <Chat />
            </>

        )
    }
}
export default DashBoardComponent