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
