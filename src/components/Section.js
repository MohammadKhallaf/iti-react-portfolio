import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class Section extends Component {
  render() {
    return (
      <>
        <div className={`container-fluid bg-${this.props.color} py-5`}>
          <div className="container"> {this.props.children} </div>
        </div>
      </>
    );
  }
}

export default Section;
