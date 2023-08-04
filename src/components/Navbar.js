import React, { Component } from "react";
import { AppBar, Toolbar } from "@material-ui/core";

import Logo from "./Logo";
import Home from "./CustonHomeMenu";
import Item from "./CustomMenuItem";

import "./css/Navbar.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <>
        <AppBar>
          <Toolbar className="toolbar">
            <Home />
            <div className="div-space" />
            <Logo />
            <div className="div-space-main"  />
            <div className="div-space-main" />
            <div className="div-space-main" />
            <div className="div-space-main" />
            <Item description="Login" url="/login" />
            <div className="div-space-menu-item" />
            <Item description="Logout" url="/logout" />
            <div className="div-space" />
          </Toolbar>
        </AppBar>
      </>
    );
  }
}

export default Navbar;
