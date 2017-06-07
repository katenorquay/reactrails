import request from 'superagent';

function signupInit(userInfo, dispatch, actions) {
  const { loginInit, signupUnsuccessful, loginSuccessful } = actions
  dispatch(loginInit());
  request
    .post('http://localhost:3000/users')
    .send(userInfo)
    .end((err, res) => {
      if (err) {
        dispatch(signupUnsuccessful())
      } else if (res) {
        var user = {id: res.body.user.id, email: res.body.user.email, token: res.body.token}
        console.log(user)
        dispatch(loginSuccessful(user))
      }
    });
};

module.exports = signupInit
