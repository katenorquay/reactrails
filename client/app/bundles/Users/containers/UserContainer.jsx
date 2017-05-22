import { connect } from 'react-redux';
import App from '../components/App';
import * as userActions from '../actions/userActionCreators';

function mapToProps(state) {
  return { state: state, actions: userActions };
}

export default connect(mapToProps)(App);
