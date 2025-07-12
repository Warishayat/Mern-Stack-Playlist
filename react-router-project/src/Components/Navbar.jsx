import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="container">
    <ul className="list-container">
        <NavLink to="/" className={({isActive})=> isActive ? "li" : "" }>Home</NavLink>
        <NavLink to="/about" className={({isActive})=> isActive ? "li" : "" }>About</NavLink>
        <NavLink to="/contact" className={({isActive})=> isActive ? "li" : "" }>Contact</NavLink>
        <NavLink to="blogs" className={({isActive})=> isActive ? "li" : "" }>Blogs</NavLink>
    </ul>
    </div>
  )
};

export default Navbar;