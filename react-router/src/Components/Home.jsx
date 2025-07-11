import React from 'react'
import Navbar from './Navbar'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'
import path from 'path'

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is home page</h1>
      <button onClick={()=>navigate("/<Login/>")}>Use Me</button>
    </div>
  )
}

export default Home