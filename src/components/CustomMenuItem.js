import React, { Component } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import history from "./history";

import Input from '@material-ui/icons/Input';

import "./css/Menuitem.css";

class CustomMenuItem extends Component {
  state = {
    description: this.props.description,
    url: this.props.url,
  };

  render() {
    return (
      <div>
        <MenuItem>
          <div onClick={() => {
          history.push(this.state.url);
        }}>
            <Input className="" />
            <ListItemIcon>
              <ListItemText className="menu-item" >
                {this.state.description}
              </ListItemText>
            </ListItemIcon>
      </div>
        </MenuItem>
      </div>
    );
  }
}

export default CustomMenuItem;
