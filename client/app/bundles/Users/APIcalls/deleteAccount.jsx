import request from 'superagent'

function deleteAccount(userInfo, dispatch, signout) {
  var headers = ReactOnRails.authenticityHeaders()
  request
    .delete("http://localhost:3000/users")
    .set('Authorization',  headers)
    .send(userInfo)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch(signout())
      }
    })
}

module.exports = deleteAccount
