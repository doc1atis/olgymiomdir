import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchBar from "../SearchBar/SearchBar";
import NavRight from "../NavRight/NavRight";
export default class NavBar extends Component {
  render() {
    return (
      <div id="navbar" className="navbar">
        <Link to="/register/" className="brand-word">
          <i className="fab fa-mix"></i>iom
        </Link>
        <SearchBar />
        <NavRight />
      </div>
    );
  }
}
