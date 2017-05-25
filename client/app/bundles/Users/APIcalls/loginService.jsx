import request from 'superagent';

function loginService(userInfo, dispatch, actions) {
    dispatch(actions.loginInit());
    return (
      request
        .post('http://localhost:3000/users/sign_in')
        .send(userInfo)
        .end((err, res) => {
          if (err) {
            dispatch(actions.loginUnsuccessful(err))
          } else if (res) {
            var user = {id: res.body.id, email: res.body.email}
            dispatch(actions.loginSuccessful(user))
          }
        })
    )
  }

module.exports = loginService
