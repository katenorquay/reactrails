import PropTypes from 'prop-types';
import React from 'react';
import Edit from './Edit'

const App = ({ signupUnsuccessful, signupInit }) => {
  const signupError = state.signupUnsuccessful ? '' : 'hidden'
  return (
    <div>
      <form>
        <input id='username' placeholder='email'/>
        <input id='password' placeholder='password'/>
        <input id='password_confirmation' placeholder='retype password'/>
        <p className={signupError}>There was an error creating your account</p>
        <button onClick={() => signupInit()}>Submit</button>
      </form>
    </div>
  )
}

export default App;
