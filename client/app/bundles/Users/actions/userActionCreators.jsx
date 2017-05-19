import requestsManager from '../lib/requestsManager'
import * as actionTypes from '../constants/userConstants';


export const loginInit = () => ({
  type: actionTypes.LOGIN_INIT
})

export function signupInit(email, password, password_confirmation) {
  signupUnsuccessful('error')
  return (dispatch) => {
    dispatch(loginInit());
    return (
      requestsManager
        .submitSignUp({user: {
          email: email,
          password: password,
          password_confirmation: password_confirmation
        }})
        .then(res => dispatch(loginSuccessful(res.data)))
        .catch(error => dispatch(signupUnsuccessful(error)))
    )
  }
}

export const loginSuccessful = (user) => ({
  type: actionTypes.LOGIN_SUCCESSFUL,
  payload: user,
})

export const loginUnsuccessful = () => ({
  type: actionTypes.LOGIN_UNSUCCESSFUL
})

export const signupUnsuccessful = (error) => ({
  type: actionTypes.SIGNUP_UNSUCCESSFUL,
  payload: error,
})

export const signout = () => ({
  type: actionTypes.SIGNOUT
})

export const editing = () => ({
  type: actionTypes.EDITING
})

export const toggleSignupLogin = () => ({
  type: actionTypes.TOGGLE_SIGNUP_LOGIN
})
