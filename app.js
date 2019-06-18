const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const swaggerUi = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const mongoose = require("mongoose");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/sonar";
mongoose.Promise = Promise;

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const leadsRouter = require("./routes/leads");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Mongo setup
app.use(
  session({
    secret: "Secret",
    store: new MongoStore({ uri: MONGODB_URI, collection: "sessions" }),
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 3*60*60*1000 // In milliseconds
    }
  })
);

mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log("Unable to connect to the mongoDB server. Error:", err);
  } else {
    console.log("Connection established to", MONGODB_URI);
  }
});

const db = mongoose.connection;

// Show any mongoose errors
db.on("error", error => {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", () => {
  console.log("Mongoose connection successful.");
});


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

app.use("/", indexRouter);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/users", usersRouter);
app.use("/leads", leadsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
