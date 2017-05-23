import request from 'superagent';

function loginService(userInfo, dispatch, loginInit, loginUnsuccessful, loginSuccessful) {
    dispatch(loginInit());
    return (
      request
        .post('http://localhost:3000/users/sign_in')
        .send(userInfo)
        .end((err, res) => {
          if (err) {
            dispatch(loginUnsuccessful())
          } else if (res) {
            var user = {id: res.body.id, email: res.body.id}
            dispatch(loginSuccessful(user))
          }
        })
    )
  }

module.exports = loginService
