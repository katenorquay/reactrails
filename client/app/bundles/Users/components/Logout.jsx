import React, { Component } from 'react'
import BaseComponent from '../lib/BaseComponent'
import _ from 'lodash';
import PropTypes from 'prop-types';
import logoutService from '../APIcalls/logoutService'

export default class Logout extends BaseComponent {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    signout: PropTypes.func.isRequired
  };

  constructor() {
     super();
     _.bindAll(this, [
       'handleLogout',
     ]);
   }


   handleLogout() {
     const { dispatch, signout } = this.props
     logoutService(dispatch, signout)
   }

   render() {
     return (
       <button onClick={this.handleLogout}>Sign Out</button>
     )
   }
}

module.exports = Logout
