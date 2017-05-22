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
    var userInfo = {
      user: {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,
        password_confirmation: document.getElementById('password_confirmation').value
      }
    }
    console.log('getting here')
    signupInit(userInfo, this.props.dispatch, this.props.actions.loginInit, this.props.actions.signupUnsuccessful)
  }

  render() {
    const { state, actions } = this.props
    console.log('this is the state', state)
    console.log('the actions', actions)
    if (state.signupError) {
      return (
        <h1>woo hoo!</h1>
      )
    } else {
      return (
        <div>
          <form>
            <input id='username' placeholder='email'/>
            <input id='password' placeholder='password'/>
            <input id='password_confirmation' placeholder='retype password'/>
            <button onClick={this.signUp}>Submit</button>
          </form>
        </div>
      )
    }
  }
}
