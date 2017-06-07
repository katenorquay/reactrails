import request from 'superagent';
import ReactOnRails from 'react-on-rails';

function deleteAccount(userInfo, dispatch, signout) {
  console.log(userInfo)
  request
    .delete("http://localhost:3000/users")
    .set('Authorization', userInfo.token)
    // .set('Authorization', ReactOnRails.authenticityHeaders())
    .send(userInfo)
    .end((err, res) => {
      if (err) {
        console.log(err)
      } else {
        dispatch(signout())
      }
    });
};

module.exports = deleteAccount
