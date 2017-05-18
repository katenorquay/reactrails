import { createStore } from 'redux';
import userReducer from '../reducers/userReducer';

const configureStore = (railsProps) => (
  createStore(userReducer, railsProps)
);

export default configureStore;
