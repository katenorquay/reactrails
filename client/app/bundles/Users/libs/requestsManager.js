import request from 'axios';
import ReactOnRails from 'react-on-rails';

const API_URL = 'users.json';

export default {

   @param {Object} entity
   @returns {Promise}

  submitSignUp(entity) {
    return request({
      method: 'POST',
      url: API_URL,
      responseType: 'json',
      data: entity
    });
  },
};
