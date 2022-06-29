import React from "react";
import logo from './bolchebanana.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
        <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>           
            Bolche & Banana
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
                Incio <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Alquilar Libros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Comprar Libros
              </a>
            </li>
            <li className="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Géneros
          </a>
          <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Filosofía</a></li>
            <li><a class="dropdown-item" href="#">História</a></li>
            <li><a class="dropdown-item" href="#">Ficción</a></li>
          </ul>
            </li>
          </ul>
        </div>
      </nav>
    )
}
export default Navbar