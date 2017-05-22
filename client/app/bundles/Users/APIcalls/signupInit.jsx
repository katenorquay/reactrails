import request from 'superagent';

function signupInit(userInfo, dispatch, loginInit, signupUnsuccessful, loginSuccessful) {
    dispatch(loginInit());
    return (
      request
        .post('http://localhost:3000/users.json')
        .send(userInfo)
        .end((err, res) => {
          if (err) {
            dispatch(signupUnsuccessful())
          } else if (res) {
            console.log(res)
            dispatch(loginSuccessful(res.body))
          }
        })
    )
  }

module.exports = signupInit
