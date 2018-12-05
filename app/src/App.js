import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import "./App.css";
import "../node_modules/bootswatch/dist/sandstone/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

//Nav
import Nav from "./components/Nav";

//Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

class App extends Component {
  state = {
    authenticated: localStorage.getItem("authenticated") === "true" || false
  };

  setAuthenticated = auth => {
    localStorage.setItem("authenticated", auth);
    this.setState({ authenticated: auth }, () => {});
  };

  getAuthenticated = () => {
    return this.state.authenticated;
  };

  render() {
    return (
      <Router>
        <React.Fragment>
          <Nav getAuthenticated={this.getAuthenticated} />
          <Switch>
            <Route
              exact
              path="/"
              component={() => {
                return <Home getAuthenticated={this.getAuthenticated} />;
              }}
            />
            <Route
              exact
              path="/about"
              component={() => {
                return <About getAuthenticated={this.getAuthenticated} />;
              }}
            />
            <Route
              exact
              path="/login"
              component={() => {
                if (this.getAuthenticated()) {
                  return <Redirect to="/" />;
                }
                return <Login setAuthenticated={this.setAuthenticated} />;
              }}
            />
            <Route
              exact
              path="/logout"
              component={() => {
                this.setAuthenticated(false);
                return <Redirect to="/login" />;
              }}
            />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
