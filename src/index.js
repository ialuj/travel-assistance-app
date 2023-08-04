import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Routes from "./components/Routes";

ReactDOM.render(
  <Router>
    <Navbar />
    <Routes />
  </Router>,
  document.getElementById("root")
);
