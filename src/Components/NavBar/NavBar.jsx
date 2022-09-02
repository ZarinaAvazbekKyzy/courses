import { Link } from "react-router-dom";
import logo from "../../image/logo.svg";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div>
      <nav>
        <div className="navRight">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <Link to="/courses">
            <h3>Courses</h3>
          </Link>
          <Link to="/contacts">
            <h3>Contacts</h3>
          </Link>
        </div>

        <div className="navLeft">
          <Link to="/cart">
            <button id="cartBtn">cart</button>
          </Link>
          <Link to="/auth">
            <button id="authBtn">log in/ register</button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
