import React, { Component } from "react";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import NavRight from "../NavRight/NavRight";
export default class NavBar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar">
        <a href="/" className="brand-word">
          <i className="fab fa-mix"></i>iom
        </a>
        <SearchBar />
        <NavRight />
      </div>
    );
  }
}
