import PropTypes from "prop-types";
import React from "react";
import BaseComponent from "../lib/BaseComponent"
import _ from "lodash";
import signupInit from "../APIcalls/signupInit"

export default class Signup extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor() {
     super();
     _.bindAll(this, ["handleSignup", "newLogin"]);
   };

  handleSignup(e) {
    e.preventDefault()
    const userInfo = {
      user: {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        password_confirmation: document.getElementById("password_confirmation").value
      }
    };
    signupInit(userInfo, this.props.dispatch, this.props.actions)
  };

  newLogin() {
    const { dispatch } = this.props
    const { toggleSignupLogin } = this.props.actions
    dispatch(toggleSignupLogin())
  };

  render() {
    const errorClass = this.props.signupError ? "" : "hidden"
    return (
      <div>
        <h2>Sign Up!</h2>
        <form>
          <input id="email" placeholder="email"/>
          <input id="password" placeholder="password"/>
          <input id="password_confirmation" placeholder="retype password"/>
          <button onClick={this.handleSignup}>Submit</button>
          <button onClick={this.newLogin}>Login</button>
          <p className={errorClass}>Signup was unsuccessful</p>
        </form>
      </div>
    );
  };
};
