// import requestsManager from '../../../libs/requestsManager'
import * as actionTypes from '../constants/userConstants';


export const loginInit = () => ({
  type: actionTypes.LOGIN_INIT
})

export function signupInit(email, password, password_confirmation) {
  return (dispatch) => {
    dispatch(loginInit());
    return (
      requestsManager
        .submitSignUp({email, password, password_confirmation})
        .then(res => dispatch(loginSuccessful(res.data)))
        .catch(error => dispatch(signupUnsuccessful(error)))
    )
  }

}

export const loginSuccessful = (user) => ({
  type: actionTypes.LOGIN_SUCCESSFUL,
  user,
})

export const loginUnsuccessful = () => ({
  type: actionTypes.LOGIN_UNSUCCESSFUL
})

export const signupUnsuccessful = (error) => ({
  type: actionTypes.SIGNUP_UNSUCCESSFUL,
  error,
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
