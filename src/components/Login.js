import React, { Component } from "react";

class Login extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper fadeInDown">
          <div id="formContent">
             <form>
                 <input type="text" id="login" claclassNamess="fadeIn second" name="login" placeholder="login" />
                 <input type="text" id="password" className="fadeIn third" name="login" placeholder="password" />
                 <input type="submit" className="fadeIn fourth" value="Log In" />
             </form>
          </div>
      </div>          
    );
  }
}

export default Login;
