const swaggerJSDoc = require("swagger-jsdoc");

// Swagger setup
const options = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "Cratic Ai API",
      version: "1.0.0",
      description: "API for Cratic Ai"
    },
    servers: [
      {
        url: "http://localhost:3000/",
        description: "Local server"
      },
      {
        url: "https://www.cratic.ai:3000/",
        description: "Production server"
      }
    ],
    produces: ["application/json"],
    basePath: "/",
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },
  apis: ["./routes/*.js"]
};
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
