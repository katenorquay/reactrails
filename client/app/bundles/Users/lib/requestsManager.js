import request from 'axios';
import ReactOnRails from 'react-on-rails';

export default {

  submitSignUp(entity) {
    return request({
      method: 'POST',
      url: 'http://localhost:3000/users',
      responseType: 'json',
      data: entity
    });
  },
};


// handleSignUp(email, password, password_confirmation) {
//   const requestConfig = {
//     responseType: 'json',
//     headers: ReactOnRails.authenticityHeaders(),
//   };
//
//   this.setState({ loginInProgress: true })
//   return (
//     request
//       .post('http://localhost:3000/users', {
//         user: {
//           email: email,
//           password: password,
//           password_confirmation: password_confirmation
//         }, requestConfig
//       })
//       .then((res) => {
//         this.setState({
//           currentUser: res.body,
//           loginInProgress: false,
//           loggedIn: true
//         })
//       })
//       .catch(error => {
//         this.setState({
//           signupError: error,
//           loginInProgress: false,
//         })
//       })
//   )
// }
