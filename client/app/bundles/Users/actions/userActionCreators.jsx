import requestsManager from '../lib/requestsManager'
import * as actionTypes from '../constants/userConstants';

function loginInit() {
  console.log('hitting loginInit')
  return {
    type: actionTypes.LOGIN_INIT
  }
}

// export const loginSuccessful = (user) => ({
//   type: actionTypes.LOGIN_SUCCESSFUL,
//   payload: user,
// })
//
// export const loginUnsuccessful = () => ({
//   type: actionTypes.LOGIN_UNSUCCESSFUL
// })
//
function signupUnsuccessful (error) {
  return {
    type: actionTypes.SIGNUP_UNSUCCESSFUL,
    payload: error
  }
}
//
// export const signout = () => ({
//   type: actionTypes.SIGNOUT
// })
//
// export const editing = () => ({
//   type: actionTypes.EDITING
// })
//
// export const toggleSignupLogin = () => ({
//   type: actionTypes.TOGGLE_SIGNUP_LOGIN
// })

module.exports = {
  signupUnsuccessful: signupUnsuccessful,
  loginInit: loginInit }
