import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import userReducer from '../reducers/userReducer';

const initialState = {
  loggedIn: false,
  loginInProgress: false,
  loginUnsuccessful: false,
  signupError: false,
  editingSuccessful: false,
  signUp: false,
  currentUser: {}
}

const configureStore = (railsProps) => (
  createStore(userReducer, initialState, applyMiddleware(thunk))
);

export default configureStore;
