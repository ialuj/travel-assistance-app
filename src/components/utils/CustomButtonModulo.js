import React, { Component } from 'react';

import "bootstrap/dist/css/bootstrap.min.css"
import "../css/Home.css";

class CustomButtonModulo extends Component {
    state = {};

    openUrl = () => {
        if(this.props.href)
        {
        window.open(this.props.href, '_blank');
        }
        else {
            alert("Modulo nao disponivel para acesso!");
        }
    }

    render() {
      return (
          <div onClick={this.openUrl}>
              <button className="btn btn-success button-style">{this.props.modulo}</button>
          </div>
      );
    }
}

export default CustomButtonModulo;
