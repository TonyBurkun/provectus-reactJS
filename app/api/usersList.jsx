var axios = require('axios');

const USERS_LIST_URL = 'https://jsonplaceholder.typicode.com/users';

module.exports = {
  getUsersList: function () {
      return axios.get(USERS_LIST_URL).then(function (response) {
          return response.data;
      }, function (error) {
          throw new Error('Unable to fetch users for that location');
      })
  }
};