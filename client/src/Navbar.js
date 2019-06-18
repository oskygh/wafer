import React from "react";
import logo from './logo.svg'

export default () => (
  <div className="App">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
      <img src={logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
        Wafer
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              How It Works
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Wafer Stores
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              For Mechanics
            </a>
          </li>
        </ul>
        <a href="#" className="mr-2">
            Create Account
          </a>
        <a href="#" class="btn btn-outline-success my-2 my-sm-0">
            Sign In
          </a>
      </div>
    </nav>
  </div>
);
