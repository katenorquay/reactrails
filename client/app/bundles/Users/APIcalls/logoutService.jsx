import request from 'superagent'

function logoutService(dispatch, signout) {
  request
    .delete(`http://localhost:3000/users/sign_out`)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch(signout())
      }
    })
}

module.exports = logoutService
