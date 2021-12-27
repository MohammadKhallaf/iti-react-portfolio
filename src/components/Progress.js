import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class Progress extends Component {
  constructor() {
    super();
    this.state = {
      width: "",
    };
  }
  componentDidMount() {
    this.setState({ width: this.props.percent });
  }

  render() {
    return (
      <div className="pb-3">
        {this.props.name}
        <div className="progress">
          <div
            className="progress-bar bg-dark"
            role="progressbar"
            style={{ width: `${this.state.width}%` }}
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
}

export default Progress;
