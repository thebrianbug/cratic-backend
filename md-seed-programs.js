const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/sonar";

//Pulls in the model
let Programs = require ("./models/program.js");
 
//Pulls in the raw data
let ProgramsData = require ("./seeds/programs.json")

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, (err, db) => {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', MONGODB_URI);
	
		Programs.create(ProgramsData);
	}
})

// mongoose.disconnect();
