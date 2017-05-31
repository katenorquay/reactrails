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
        console.log(res)
        dispatch(loginSuccessful(res.body))
      }
    });
};

module.exports = signupInit
