import React from 'react'
import firebase from 'firebase'
import LoginComponent from "./login/Login"
import DashBoardComponent from "./dashboad/Dashboard"
import SignupComponent from "./signup/Signup"
import {Route,BrowserRouter as Router} from 'react-router-dom'


const app=firebase.initializeApp({
  apiKey: "AIzaSyCvhjblyTONlxmTTC3zIy6Ag16EJuLy44Y",
  authDomain: "loyal-network-282904.firebaseapp.com",
  projectId: "loyal-network-282904",
  storageBucket: "loyal-network-282904.appspot.com",
  messagingSenderId: "121516309929",
  appId: "1:121516309929:web:20813cb1f255a912e198b8"
})

const routing=(
  <Router>
    <Route path="/login" component={LoginComponent}></Route>
    <Route path="/signup" component={SignupComponent}></Route>
    <Route path="/dashboard" component={DashBoardComponent}></Route> 
  </Router>
)

function App() {
  return (
    <div className="App">
    {routing}

    </div>
  );
}

export default App;
