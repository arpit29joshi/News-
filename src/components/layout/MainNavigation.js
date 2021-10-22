import { NavLink } from "react-router-dom";
import "./MainNavigation.css";

function MainNavigation() {
  return (
    <header className="header">
      <div className="logo">News </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/world">World</NavLink>
          </li>
          <li>
            <NavLink to="/arts">Arts</NavLink>
          </li>
          <li>
            <NavLink to="/science">Science</NavLink>
          </li>
          <li>
            <NavLink to="/us" >
              Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
