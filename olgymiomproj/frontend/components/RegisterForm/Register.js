import React, { Component } from "react";
import "./Register.css";
export default class Register extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("form sumitted olgy");
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} id="register-form">
        <input
          type="email"
          min="6"
          id="email"
          placeholder="Email"
          className="form-input"
        />
        <input
          type="password"
          min="6"
          id="password"
          placeholder="Password"
          className="form-input"
        />
        <input type="submit" value="Register" id="register-submit" />
      </form>
    );
  }
}
