import PropTypes from 'prop-types';
import React from 'react';
import BaseComponent from '../lib/BaseComponent'
import _ from 'lodash';
import loginService from '../APIcalls/loginService'

export default class Login extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor() {
     super();
     _.bindAll(this, [
       'handleLogin',
       'newSignup'
     ]);
   }

  handleLogin(e) {
    e.preventDefault()
    const { loginInit, loginUnsuccessful, loginSuccessful } = this.props.actions
    const { dispatch } = this.props
    var userInfo = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }
    loginService(userInfo, dispatch, loginInit, loginUnsuccessful, loginSuccessful)
  }

  newSignup() {
    this.props.dispatch(this.props.actions.toggleSignupLogin())
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input id='email' placeholder='email'/>
          <input id='password' placeholder='password'/>
          <button onClick={this.handleLogin}>Submit</button>
          <button onClick={this.newSignup}>Sign Up</button>
        </form>
      </div>
    )
  }
}
