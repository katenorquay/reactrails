import React, { Component } from 'react'
import BaseComponent from '../lib/BaseComponent'
import _ from 'lodash';
import PropTypes from 'prop-types';
import deleteAccount from '../APIcalls/deleteAccount'

export default class Delete extends BaseComponent {

  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    signout: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor() {
     super();
     _.bindAll(this, [
       'handleDelete',
     ]);
   }

   handleDelete() {
    const { dispatch, currentUser, signout } = this.props
    var userInfo = { user: { email: currentUser.email }}
    deleteAccount(userInfo, dispatch, signout)
  }

  render () {
    return (
      <button onClick={this.handleDelete}>Delete Account</button>
    )
  }
}

module.exports = Delete
