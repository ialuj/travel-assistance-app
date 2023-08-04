import React, { Component } from "react";

import "./css/Home.css";
import 'bootstrap/dist/css/bootstrap.css';

class Login extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="div-home">
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Username</label>
              <input type="text" class="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter your username here..." />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="password" placeholder="Password" />
            </div>
            <button type="submit" class="btn btn-primary">Login</button>
          </form>
        </div>
      </>
    );
  }
}

export default Login;
