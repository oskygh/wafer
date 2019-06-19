import React from "react";
import logo from './logo.svg'

export default () => (
  <div className="App">
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
      <img src={logo} width="30" height="30" className="d-inline-block align-top" alt=""/>
        Wafer
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              How It Works
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Wafer Stores
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              For Mechanics
            </a>
          </li>
        </ul>
        <a href="#" className="mr-2">
            Create Account
          </a>
        <a href="#" className="btn btn-outline-success my-2 my-sm-0">
            Sign In
          </a>
      </div>
    </nav>
  </div>
);
