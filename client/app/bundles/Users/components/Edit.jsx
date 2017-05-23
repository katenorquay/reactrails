import PropTypes from 'prop-types';
import React from 'react';
import BaseComponent from '../lib/BaseComponent'
import _ from 'lodash';
import editAccount from '../APIcalls/editAccount'
import Delete from './Delete'
import Logout from './Logout'

export default class Edit extends BaseComponent {

  static propTypes = {
    editingSuccessful: PropTypes.bool.isRequired,
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor() {
     super();
     _.bindAll(this, [
       'handleUpdate',
     ]);
   }

  handleUpdate() {
    const { dispatch } = this.props
    const { editing } = this.props.actions
    const userInfo = {
      user: {
        email: document.getElementById('confirmEmail').value,
        password: document.getElementById('newPassword').value,
        password_confirmation: document.getElementById('confirmNewPassword').value,
      }
    }
    editAccount(userInfo, dispatch, editing)
  }

  render() {
    const { dispatch, currentUser } = this.props
    const { signout } = this.props.actions
    const customClass = this.props.editingSuccessful ? '' : 'hidden'
      return (
        <div>
          <h2>Edit Account</h2>
          <form>
            <input id='confirmEmail' placeholder='email'/>
            <input id='newPassword' placeholder=' new password'/>
            <input id='confirmNewPassword' placeholder='retype new password'/>
            <button onClick={this.handleUpdate}>Submit</button>
          </form>
          <Logout dispatch={dispatch} signout={signout} />
          <Delete currentUser={currentUser} dispatch={dispatch} signout={signout} />
        </div>
      )
    }
  }
