import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Card.css"

class Card extends Component {
  render() {
    return (
      <div className="col">
        <div
          className="card shadow  justify-content-center align-items-center"
          style={{ width: "200px", height: "200px" }}
        >
          <div>{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Card;
