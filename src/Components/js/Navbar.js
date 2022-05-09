import React from "react";
import { HiSearch } from "react-icons/hi";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand logo" href="#">
            <span className="logo"> Creative </span>{" "}
            <span className="fw-bold logo">Agency</span>
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
            <ul className="navbar-nav me-auto ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-4">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Portfolio
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Blog
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item me-4">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
              <form class="d-flex">
                {/* <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
                <button class="btn text-secondary" type="submit">
                  <HiSearch />
                </button>
              </form>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
