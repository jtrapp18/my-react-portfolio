import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav class="nav-bar">
      <NavLink
        to="/"
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
      >
        About
      </NavLink>
      <NavLink
        to="/projects"
        className="nav-link"
      >
        Projects
      </NavLink>
    </nav>
  );
};

export default NavBar;