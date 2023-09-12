import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import 'bootstrap/dist/js/bootstrap.js';


export default function NavBar() {
  let [color, setColor] = useState(false);
  function changeColor() {
    if (window.scrollY > 50) {
      setColor(true);
    } else {
      setColor(false);
    }
  }
  window.addEventListener("scroll", changeColor);

  return (
    <>
       <nav className="navbar fixed-top start-0 end-0  my-0 navbar-expand-lg ">
        <div className="container py-0 my-0">
          <a className="navbar-brand p-0 " href="">
            <h1 className="me-auto ">START FRAMEWORK</h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={
                color
                  ? "d-flex down  align-items-center m-0  navbar-nav ms-auto justify-content-center"
                  : "d-flex up  align-items-center m-0  navbar-nav ms-auto justify-content-center"
              }
            >
              <li className="mx-4 nav-item">
                <NavLink to="" className="nav-link fw-bold  " aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="mx-4 nav-item">
                <NavLink to="about" className="nav-link fw-bold">
                  About
                </NavLink>
              </li>
              <li className="mx-4 nav-item">
                <NavLink to="protofolio" className="nav-link fw-bold">
                  Protofolio
                </NavLink>
              </li>
              <li className="mx-4 nav-item">
                <NavLink to="contact" className="nav-link fw-bold">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav> 

    </>
  );
}
