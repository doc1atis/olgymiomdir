import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./App.css";
import NavBar from "../components/NavBar/NavBar";
export default class App extends Component {
  render() {
    return (
      <div id="root-container">
        <NavBar />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
