import React from 'react'
import './App.css'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import {getDatabase , ref , set} from 'firebase/database'
import { app } from './firebase'   //import form the firebase.js
// const database = getDatabase(app)  //no i can intract with database instance
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import Navbar from './Pages/Navbar'
import Home from './Pages/Home'
import Welcome from './Pages/Welcome'


// function putData(){
//     set(ref(database,"user/waris"),{
//       id:1,
//       name: "waris hayat abbasi",
//       age : 20
//     })
//     alert("DATA IS SAVED")
// }


function App() {
  
  return (
    // <>
    //  <h1>Hello from waris</h1>
    //  <button onClick={putData}>Save Data</button>
    // </>
    <div>
      <Router>
        <Navbar/>
        <Routes>
         <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/welcome' element={<Welcome/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
