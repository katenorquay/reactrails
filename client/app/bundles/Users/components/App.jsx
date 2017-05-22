import PropTypes from 'prop-types';
import React from 'react';
import BaseComponent from '../lib/BaseComponent'
import _ from 'lodash';
import signupInit from './helpers'

export default class App extends BaseComponent {

  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor() {
     super();
     _.bindAll(this, [
       'signUp',
     ]);
   }

  signUp(e) {
    e.preventDefault()
    const { loginInit, signupUnsuccessful, loginSuccessful } = this.props.actions
    const { dispatch } = this.props
    var userInfo = {
      user: {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        password_confirmation: document.getElementById('password_confirmation').value
      }
    }
    signupInit(userInfo, dispatch, loginInit, signupUnsuccessful, loginSuccessful)
  }

  render() {
    const { state, actions } = this.props
    if (state.signupError) {
      return (
        <h1>woo hoo!</h1>
      )
    } else if (state.loggedIn) {
      return ( <h2>loggedin</h2> )
    } else {
      return (
        <div>
          <form>
            <input id='email' placeholder='email'/>
            <input id='password' placeholder='password'/>
            <input id='password_confirmation' placeholder='retype password'/>
            <button onClick={this.signUp}>Submit</button>
          </form>
        </div>
      )
    }
  }
}
