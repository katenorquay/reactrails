import PropTypes from 'prop-types';
import React from 'react';
import Edit from './Edit'

const App = ({loggedIn, signupError, signupInit}) => {
  console.log(loggedIn, signupError)
  if (signupError == true) {
    return (
      <h1>woo hoo!</h1>
    )} else if (loggedIn) {
      return (
        <h1>signed in</h1>
      )
    } else {
    return (
      <div>
        <form>
          <input id='username' placeholder='email'/>
          <input id='password' placeholder='password'/>
          <input id='password_confirmation' placeholder='retype password'/>

          <button onClick={() => signupInit(document.getElementById('username').value, document.getElementById('password').value, document.getElementById('password_confirmation').value)}>Submit</button>
        </form>
      </div>
    )
  }
}

export default App;
