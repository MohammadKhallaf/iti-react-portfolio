import React from "react";
import { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component{


    render(){
        return(
            <footer className="footer ">
                {this.props.children}
            </footer>
        )
    }
}

export default Footer;
