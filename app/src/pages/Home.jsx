import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Home extends Component {
  state = {};
  render() {
    if (!this.props.getAuthenticated()) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

export default Home;
