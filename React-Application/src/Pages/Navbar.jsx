import { NavLink } from "react-router-dom";
import "./Navbar.css"; // Import external CSS

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
          <NavLink to="/signup" className="nav-link">Signup</NavLink>
          <NavLink to="/login" className="nav-link">Login</NavLink>
        </div>
        <NavLink to="/signup">
          <button className="get-started-btn">Get Started</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
