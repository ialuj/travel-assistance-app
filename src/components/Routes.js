import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

import Home from "./Home";
import Login from "./Login";

class Routes extends Component {
  state = {};
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
