import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <NavLink to="/signup"> Signup </NavLink>
        <br />
        <NavLink to="/login">Login </NavLink>
    </div>

  )
};

export default Navbar;