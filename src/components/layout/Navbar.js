import React from "react";
import { Link, NavLink } from "react-router-dom";

function refreshPage() {
    localStorage.clear()
    window.location.reload(false);
  }

const Navbar = () => {
    if (localStorage.getItem("auth") === null) {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <img height="75px" className="navLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/99/California_Department_of_Housing_and_Community_Development_seal.png" />
            

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">
                                Home
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">
                                About
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/data">
                                Data
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">
                                Contact
              </NavLink>
                        </li>

                    </ul>
                </div>
                

                <Link className="btn btn-outline-light" to="/login">Login</Link>

                

            </div>

        </nav>
        );
      }else{
          return(
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <img height="75px" className="navLogo" src="https://upload.wikimedia.org/wikipedia/commons/9/99/California_Department_of_Housing_and_Community_Development_seal.png" />


                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">
                                Home
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/about">
                                About
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/data">
                                Data
              </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/contact">
                                Contact
              </NavLink>
                        </li>

                    </ul>
                </div>
                

                

                <Link className="btn btn-outline-light" to="/login" onClick={refreshPage}>LogOut</Link>

            </div>

        </nav>
          );
      }
      
        
    

    
}

export default Navbar;