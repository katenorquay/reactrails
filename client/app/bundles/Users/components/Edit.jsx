import PropTypes from 'prop-types';
import React from 'react';
import BaseComponent from '../lib/BaseComponent'
import _ from 'lodash';
import request from 'superagent';
import ReactOnRails from 'react-on-rails';
import Delete from './Delete'
import Logout from './Logout'

export default class Edit extends BaseComponent {

  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor() {
     super();
     this.state = {
       editingSuccessful: null,
     };
     _.bindAll(this, 'handleUpdate');
   }

  handleUpdate(e) {
    e.preventDefault()
    const { dispatch, currentUser } = this.props
    const { editing } = this.props.actions
    const userInfo = {
      user: {
        email: currentUser.email,
        password: document.getElementById('newPassword').value,
        password_confirmation: document.getElementById('confirmNewPassword').value,
      }
    }
    var headers = ReactOnRails.authenticityHeaders()
    request
      .put("http://localhost:3000/users")
      .set('Authorization', headers)
      .send(userInfo)
      .end((err, res) => {
        if (err) {
          this.setState({ editingSuccessful: false });
        } else {
          this.setState({ editingSuccessful : true})
        }
      })
  }


  render() {
    const { dispatch, actions, currentUser } = this.props
    var customClass = 'hidden'
    var message = ''
    if (this.state.editingSuccessful) {
      message = 'Password successfully updated'
      customClass = ''
    } else if (this.state.editingSuccessful == false) {
      message = 'There was an error updating your password'
      customClass = ''
    }
      return (
        <div>
          <h2>Edit Account</h2>
          <form>
            <input id='newPassword' placeholder=' new password'/>
            <input id='confirmNewPassword' placeholder='retype new password'/>
            <button onClick={this.handleUpdate}>Submit</button>
          </form>
          <p className={customClass}>{message}</p>
          <Logout dispatch={dispatch} signout={actions.signout} />
          <Delete currentUser={currentUser} dispatch={dispatch} signout={actions.signout} />
        </div>
      )
    }
  }
