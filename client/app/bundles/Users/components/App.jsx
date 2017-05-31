import PropTypes from "prop-types";
import React from "react";
import BaseComponent from "../lib/BaseComponent"
import _ from "lodash";
import Login from "./Login"
import Signup from "./Signup"
import Edit from "./Edit"

export default class App extends BaseComponent {

  static propTypes = {
    state: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  };

  render() {
    const { state, actions, dispatch } = this.props
    if (state.loggedIn) {
      return <Edit currentUser={state.currentUser} dispatch={dispatch} actions={actions} />;
    } else if (state.signUp) {
        return <Signup dispatch={dispatch} actions={actions} signupError={state.signupError}/>;
    } else {
        return <Login dispatch={dispatch} actions={actions} loginUnsuccessful={state.loginUnsuccessful}/>;
    }
  };
};
