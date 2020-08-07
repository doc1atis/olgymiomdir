import React, { Component } from "react";
import { Router, Route } from "react-router-dom";
import history from "../src/history";
import "./App.css";
import NavBar from "../components/NavBar/NavBar";
import RegisterForm from "../components/RegisterForm/Register";
import PlayerPage from "../components/PlayerPage/PlayerPage";
import HomePage from "../components/HomePage/HomePage";
export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div id="root-container">
          <NavBar />
          {/* <RegisterForm /> */}
          <Route path="/" exact component={HomePage} />
          <Route path="/player/" exact component={PlayerPage} />
          <Route path="/register/" exact component={RegisterForm} />
        </div>
      </Router>
    );
  }
}
