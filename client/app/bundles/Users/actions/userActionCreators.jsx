import * as actionTypes from '../constants/userConstants';

function loginInit() {
  return {
    type: actionTypes.LOGIN_INIT
  }
}

function loginSuccessful(user) {
  return {
    type: actionTypes.LOGIN_SUCCESSFUL,
    payload: user
  }
}

function loginUnsuccessful(error) {
  return {
    type: actionTypes.LOGIN_UNSUCCESSFUL,
    payload: error
  }
}

function signupUnsuccessful (error) {
  return {
    type: actionTypes.SIGNUP_UNSUCCESSFUL,
    payload: error
  }
}

function signout () {
  return {
    type: actionTypes.SIGNOUT
  }
}

function toggleSignupLogin() {
  return {
    type: actionTypes.TOGGLE_SIGNUP_LOGIN
  }
}

module.exports = {
  loginInit: loginInit,
  loginSuccessful: loginSuccessful,
  loginUnsuccessful: loginUnsuccessful,
  signupUnsuccessful: signupUnsuccessful,
  signout: signout,
  toggleSignupLogin: toggleSignupLogin
}
