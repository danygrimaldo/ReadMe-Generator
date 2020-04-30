const axios = require("axios");

const api = {
  getUser(username) {
    axios.get(
      `https://api.github.com/users/${username}`
    ).then (function(response){
      console.log(response)
    });
  }
};

module.exports = api;
