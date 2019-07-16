'use strict';

module.exports.hello = async event => {
  let message = 'Hello World';

  if (event.queryStringParameters && event.queryStringParameters.name) {
    message = `Hello, ${event.queryStringParameters.name}`;
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message,
    }),
  };
};
