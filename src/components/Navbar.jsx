import { NavLink, Link } from "react-router-dom";
import { shop } from "../shopInfo";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="brand">
        {shop.name}
      </Link>
      <nav aria-label="Main">
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/products">Products</NavLink></li>
          <li><NavLink to="/find-us">Find us</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
