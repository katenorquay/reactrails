import { combineReducers } from 'redux';
import * as actionTypes from '../constants/userConstants';
import clone from 'clone'

export const initialState = {
  loggedIn: false
}


const userReducer = (initialState, action) => {
  var newState = clone(initialState)
  switch (action.type) {
    case actionTypes.LOG_IN:
      newState.loggedIn = true
      return newState
    default:
      return newState;
  }
};

export default userReducer;
