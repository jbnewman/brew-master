import React, { Component } from "react";
import { Link } from "react-router-dom";

function LoginButton(props) {
  if (!props.authenticated) {
    return (
      <Link to="/login" className="nav-link">
        Login
      </Link>
    );
  } else {
    return (
      <Link to="/logout" className="nav-link">
        Logout
      </Link>
    );
  }
}

class Nav extends Component {
  state = {};
  render() {
    if (!this.props.getAuthenticated()) {
      return "";
    }
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link to="/" className="navbar-brand">
          Brew Master
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <LoginButton authenticated={this.props.getAuthenticated()} />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
