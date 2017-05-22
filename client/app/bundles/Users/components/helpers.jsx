import request from 'superagent';

function signupInit(userInfo, dispatch, loginInit, signupUnsuccessful, loginSuccessful) {
    dispatch(loginInit());
    return (
      request
        .post('http://localhost:3000/users')
        .send(userInfo)
        .end((err, res) => {
          if (err) {
            dispatch(signupUnsuccessful())
          } else {
            dispatch(loginSuccessful(res.body))
          }
        })
    )
  }

module.exports = signupInit
