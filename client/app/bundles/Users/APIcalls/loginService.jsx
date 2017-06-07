import request from 'superagent';
import ReactOnRails from 'react-on-rails';

function loginService(userInfo, dispatch, actions) {
  const { loginInit, signupUnsuccessful, loginSuccessful } = actions
  dispatch(loginInit());
  request
    .post('http://localhost:3000/users/sign_in')
    .send(userInfo)
    .end((err, res) => {
      if (err) {
        dispatch(loginUnsuccessful(err))
      } else if (res) {
        var user = {id: res.body.user.id, email: res.body.user.email, token: res.body.token}
        console.log(user)
        dispatch(loginSuccessful(user))
      }
    });
};

module.exports = loginService
