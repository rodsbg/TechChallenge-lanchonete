const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sample API',
      version: '1.0.0',
      description: 'A sample API using Swagger and Express',
    },
  },
  apis: ['./application/routes/*.js'], // Path to the API routes
};

module.exports = options;

