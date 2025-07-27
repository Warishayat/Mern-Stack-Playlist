import React from 'react'
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import {getDatabase , ref , set} from 'firebase/database'
import { app } from './firebase'   //import form the firebase.js
const database = getDatabase(app)  //no i can intract with database instance

function putData(){
    set(ref(database,"user/waris"),{
      id:1,
      name: "waris hayat abbasi",
      age : 20
    })
    alert("DATA IS SAVED")
}


function App() {
  
  return (
    <>
     <h1>Hello from waris</h1>
     <button onClick={putData}>Save Data</button>
    </>
  )
}

export default App
