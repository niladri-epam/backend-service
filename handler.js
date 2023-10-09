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

module.exports.getProductsList = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(products),
  };
};

module.exports.getProductsById = async (event) => {
  const productId = event.pathParameters.productId
  const productIndex = products.findIndex(p => p.id === productId)

  if (productIndex === -1) {
    return {
      statusCode: 404,
      body: JSON.stringify({})
    }
  }
  return {
    statusCode: 200,
    body: JSON.stringify(products[productIndex]),
  };
};

