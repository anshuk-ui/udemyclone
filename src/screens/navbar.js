import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import  Navbar  from "bootstrap";
const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Udemy
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/screens/login">
              Log in
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Search
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Broswe
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Add to Cart
              </a><br></br>
              <a className="dropdown-item" href="#">
                Categories
              </a>
              <a className="dropdown-item" href="#">
                <br></br>Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
    

}
export default Navbar