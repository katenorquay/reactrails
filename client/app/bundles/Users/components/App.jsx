import PropTypes from 'prop-types';
import React from 'react';
import Edit from './Edit'

const App = ({ name, loggedIn, logIn }) => {
  if (loggedIn) {
    return (
      <Edit />
    )
  } else {
      return (
        <div>
          <p>Not Logged In</p>
          <button onClick={() => logIn()}>Log In!</button>
        </div>
      )
  }
}

export default App;
