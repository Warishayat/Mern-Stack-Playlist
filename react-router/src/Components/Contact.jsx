import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

const Contact = () => {
  return (
    <div>
     <h1> This is contact page</h1>
     <Outlet/>
    </div>
  )
}

export default Contact
