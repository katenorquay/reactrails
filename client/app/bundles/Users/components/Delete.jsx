import React, { Component } from "react"
import _ from "lodash";
import PropTypes from "prop-types";
import deleteAccount from "../APIcalls/deleteAccount"

export default class Delete extends React.PureComponent {

  static propTypes = {
    currentUser: PropTypes.object.isRequired,
    signout: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  constructor() {
    super();
    _.bindAll(this, "handleDelete");
  };

  handleDelete() {
    const {currentUser, dispatch, signout } = this.props
    let userInfo = { user: { email: currentUser.email }}
    deleteAccount(userInfo, dispatch, signout)
  };

  render () {
    return <button onClick={this.handleDelete}>Delete Account</button>
  };
};

module.exports = Delete
