import PropTypes from "prop-types";
import React from "react";
import BaseComponent from "../lib/BaseComponent"
import _ from "lodash";
import request from "superagent";
import ReactOnRails from "react-on-rails";
import Delete from "./Delete"
import Logout from "./Logout"

export default class Edit extends BaseComponent {

  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
    actions: PropTypes.object.isRequired
  };

  constructor() {
     super();
     this.state = {
       editSuccessful: null,
     };
     _.bindAll(this, ["handleUpdate", "getEditData"]);
   }

  handleUpdate(e) {
    e.preventDefault()
    const { dispatch, currentUser } = this.props
    const { editing } = this.props.actions
    const userInfo = {
      user: {
        email: currentUser.email,
        password: document.getElementById("newPassword").value,
        password_confirmation: document.getElementById("confirmNewPassword").value,
      }
    }
    const headers = ReactOnRails.authenticityHeaders()
    request
      .put("http://localhost:3000/users")
      .set("Authorization", headers)
      .send(userInfo)
      .end((err, res) => {
        if (err) {
          this.setState({ editingSuccessful: false });
        } else {
          this.setState({ editingSuccessful : true})
        }
      });
  };

  getEditData() {
    let customClass = "hidden";
    let message = "";
    switch(this.state.editSuccessful) {
      case "true":
        message = "Password successfully updated";
        customClass = "";
        break;
      case "false":
        message = "There was an error updating your password";
        customClass = "";
        break;
    };
    return {message: message, customClass: customClass};
  };

  render() {
    const { dispatch, actions, currentUser } = this.props
    let editData = this.getEditData()
    return (
      <div>
        <h2>Edit Account</h2>
        <form>
          <input id="newPassword" placeholder="new password"/>
          <input id="confirmNewPassword" placeholder="retype new password"/>
          <button onClick={this.handleUpdate}>Submit</button>
        </form>
        <p className={editData.customClass}>{editData.message}</p>
        <Logout dispatch={dispatch} signout={actions.signout} />
        <Delete currentUser={currentUser} dispatch={dispatch} signout={actions.signout} />
      </div>
    );
  };
};
