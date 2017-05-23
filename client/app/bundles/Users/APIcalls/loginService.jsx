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
            console.log(res)
            dispatch(loginSuccessful(res.body))
          }
        })
    )
  }

module.exports = loginService
