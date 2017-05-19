import { createStore } from 'redux';
import helloWorldReducer from '../reducers/helloWorldReducer';

const configureStore = (railsProps) => (
  createStore(helloWorldReducer, railsProp)
);

export default configureStore;
