const mongoose = require("mongoose");
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/sonar";

// Connect Mongoose
mongoose.connect(MONGODB_URI, { useNewUrlParser: true }, (err, db) => {
  if (err) {
    console.log("Unable to connect to the mongoDB server. Error:", err);
  }
  else {
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
