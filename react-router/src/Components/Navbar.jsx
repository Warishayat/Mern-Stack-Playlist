import React from 'react'
import {Link,NavLink, useNavigate} from 'react-router-dom'
const Navbar = () => {
    const navigate = useNavigate();
  return (
    
    <div >
      <div >
        <ul className='Nav-container'>
            <li>
              
                {/* <a href="/">Home</a> */}
                {/* <Link to="/">Home</Link> */}
                <NavLink to="/" className={({isActive})=>isActive ? "is-active" : ""}>
                  Home
                </NavLink>
            </li>
            <li>
                {/* <a href="/about">About</a> */}
                {/* <Link to="/about">About</Link> */}
                <NavLink to="/about" className={({isActive})=>isActive ? "is-active": ""}>About</NavLink>
            </li>
            <li>
                {/* <a href="/contact">Contact</a> */}
                {/* <Link to="/contact">Contact</Link> */}
                <NavLink to='/contact' className={({isActive})=>isActive ? "is-active" : ""}>Contact</NavLink>
            </li>
            <li>
              <NavLink to='/student/:id' className={({isActive})=>isActive ? "is-active" : ""}>
                Student Name
              </NavLink>
              
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
