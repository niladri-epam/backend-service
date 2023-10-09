'use strict';
const products = require('./data/mock.json')

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Hello',
        description: 'Welcome to AWS Shop'
      }
    ),
  };
};
