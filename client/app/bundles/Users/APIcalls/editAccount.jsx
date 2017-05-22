import request from 'superagent';
import ReactOnRails from 'react-on-rails';

function editAccount(userInfo, dispatch, editing) {
  var headers = ReactOnRails.authenticityHeaders()
  request
    .put("http://localhost:3000/users.json")
    .set('Authorization', headers)
    .send(userInfo)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch(editing())
      }
    })
  }

module.exports = editAccount
