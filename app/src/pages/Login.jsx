import React, { Component } from "react";
import "../css/signin.css";
class Login extends Component {
  render() {
    return (
      <div className="text-center">
        <form className="form-signin">
          <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>

          <input
            type="email"
            className="form-control"
            placeholder="Email address"
            required
            autofocus
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required
          />

          <button
            className="btn btn-lg btn-primary btn-block"
            type="button"
            onClick={() => this.props.setAuthenticated(true)}
          >
            Sign in
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
