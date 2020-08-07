import React, { Component } from "react";
import "./NavRight.css";
export default class NavRight extends Component {
  render() {
    return (
      <div id="nav-right-side">
        {/* <button id="navbar-loggin-button">Login</button> */}
        <span id="user-logo">
          <i className="fas fa-user-slash"></i>
        </span>
      </div>
    );
  }
}
