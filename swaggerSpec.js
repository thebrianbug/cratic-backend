
const swaggerJSDoc = require("swagger-jsdoc");

// Swagger setup
const options = {
  swaggerDefinition: {
    info: {
      title: "Cratic Ai API",
      version: "1.0.0",
      description: "API for Cratic Ai"
    },
    host: "localhost:3000",
    produces: ["application/json"],
    basePath: "/"
  },
  apis: ['./routes/*.js']
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
