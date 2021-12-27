import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class Buttton extends Component {
  render() {
    return <div className={`btn btn-${this.props.color}`}>CONTACT ME</div>;
  }
}

export default Buttton;
