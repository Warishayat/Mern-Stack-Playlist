import React from "react"
import './Navbar.css'
import { NavLink } from "react-router"
const Navbar = () => {
   return (
     <div className="nav-container">
      <NavLink to={"/"}> <h2>Home</h2> </NavLink>
      <NavLink to={"/pastes"}> <h2>Pastes</h2> </NavLink>
     </div>
   )
 };
 
 export default Navbar;