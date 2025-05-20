import React from "react";
import "./Header.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";

function Header() {
  const { cart } = useContext(CartContext);
  return (
    <>
      <nav className=" navbar navbar-expand-lg navbar-dark  shadow-sm ">
        <div className="head container  ">
          <NavLink to={"/"} className="navbar-brand d-flex align-items-center" >
            <div className="logo-anime" style={{color:"yellow" }}>
              <Logo />
            </div>
           
            
            <div className="navbar-brand">
              <span className="fw-bold ">DaxoMart</span>
            </div>
          </NavLink>

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item ">
                <NavLink
                  to={"/"}
                  className="nav-link"
                  
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item ">
                <NavLink
                  to={"/products"}
                  className="nav-link"
                  aria-current="page"
                  
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/service"} className="nav-link">
                  Service
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to={"/about"} className="nav-link">
                  About
                </NavLink>
              </li>
            </ul>

            <form className="d-flex me-2">
              <div className="input-group">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for DaxoMart Products"
                  aria-label="Search"
                />
                <button className="btn btn-outline-light" type="submit">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-search"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
            </form>

            <div className="d-flex align-items-center">
              <NavLink
                to={"/login"}
                
                className="btn btn-outline-light me-2 d-flex align-items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-person me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z" />
                </svg>
                Login
              </NavLink>
              <NavLink to={"/cart"}  className="btn btn-warning d-flex align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-cart me-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                </svg>
                Cart{" "}
                <span
                  style={
                    cart.length > 0
                      ? {
                          color: "white",
                          fontWeight: "bold",
                          backgroundColor: "red",
                          padding: "3px",
                          width: "30px",
                          borderRadius: "15px",
                          marginLeft: "5px",
                        }
                      : {}
                  }
                >
                  {cart.length > 0 ? cart.length : ""}
                </span>
                <span className="badge bg-danger text-dark ms-1"></span>
              </NavLink>
              <div className="head-profile d-inline-flex position-relative">
                <span className="position-absolute top-0  start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">New alerts</span>
                </span>
                <img
                  className="rounded-4 shadow-4 "
                  src="https://mdbootstrap.com/img/Photos/Avatars/man2.jpg"
                  alt="Avatar"
                  style={{ width: "50px", height: "50px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
