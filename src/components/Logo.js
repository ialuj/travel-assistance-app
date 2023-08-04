import React, { Component } from "react";
import LOGO from "./images/logo.png";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import history from "./history";

import "./css/Logo.css";

class Logo extends Component {
  state = {};
  render() {
    return (
      <div
        onClick={() => {
          history.push("/");
        }}
      >
        <MenuItem className="logo">
          <div>
            <ListItemIcon>
              <img src={LOGO} alt="" className="logo div" />
            </ListItemIcon>
          </div>
        </MenuItem>
      </div>
    );
  }
}

export default Logo;
