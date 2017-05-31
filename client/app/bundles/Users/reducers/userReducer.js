const clone = require("clone");
const actionTypes = require("../constants/userConstants");

const userReducer = (state = {}, action) => {
  var newState = clone(state);
  switch (action.type) {
    case actionTypes.LOGIN_INIT:
      newState.loginInProgress = true;
      return newState;
    case actionTypes.LOGIN_SUCCESSFUL:
      newState.loginInProgress = false;
      newState.loginUnsuccessful = false;
      newState.loggedIn = true;
      newState.currentUser = action.payload;
      return newState;
    case actionTypes.LOGIN_UNSUCCESSFUL:
      newState.loginInProgress = false;
      newState.loginUnsuccessful = true;
      return newState;
    case actionTypes.SIGNUP_UNSUCCESSFUL:
      newState.signupError = true;
      newState.loginInProgress = false;
      return newState;
    case actionTypes.SIGNOUT:
      newState.loggedIn = false;
      newState.currentUser = {};
      newState.signUp = false;
      return newState;
    case actionTypes.TOGGLE_SIGNUP_LOGIN:
      newState.signUp = !newState.signUp;
      newState.loginUnsuccessful = false;
      return newState;
    default:
      return newState;
  }
};

module.exports = userReducer;
