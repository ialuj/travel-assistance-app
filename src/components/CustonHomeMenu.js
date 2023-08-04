import React, { Component } from "react";
import { Home } from "@material-ui/icons";

import history from "./history";

import "./css/Menuitem.css";

class CustomHomeMenu extends Component {
  state = {};
  render() {
    return (
      <div
        onClick={() => {
          history.push("/");
        }}
      >
        <Home className="user-account-icon" />
      </div>
    );
  }
}

export default CustomHomeMenu;
