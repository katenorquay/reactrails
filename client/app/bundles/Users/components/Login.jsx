import PropTypes from 'prop-types';
import React from 'react';
import BaseComponent from '../lib/BaseComponent'
import _ from 'lodash';
import loginService from '../APIcalls/loginService'

export default class Login extends BaseComponent {

  static propTypes = {
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    loginUnsuccessful: PropTypes.bool.isRequired
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
    const { dispatch, actions } = this.props
    var userInfo = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
    }
    loginService(userInfo, dispatch, actions)
  }

  newSignup() {
    const { dispatch, actions } = this.props
    dispatch(actions.toggleSignupLogin())
  }

  render() {
    const errorClass = this.props.loginUnsuccessful ? '' : 'hidden'
    return (
      <div>
        <h2>Login</h2>
        <form>
          <input id='email' placeholder='email'/>
          <input id='password' placeholder='password'/>
          <button onClick={this.handleLogin}>Submit</button>
          <button onClick={this.newSignup}>Sign Up</button>
          <p className={errorClass}>Login was unsuccessful</p>
        </form>
      </div>
    )
  }
}
