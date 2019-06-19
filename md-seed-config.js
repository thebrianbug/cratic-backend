const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/sonar";

//Pulls in the model
let Departments = require ("./models/department.js");
let Surveys = require ("./models/survey.js");
let Questions = require ("./models/question.js");
 
//Pulls in the raw data
let DepartmentData = require ("./seeds/departments.json")
let SurveysData = require ("./seeds/surveys.json")
let QuestionsData = require ("./seeds/questions.json")

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, (err, db) => {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', MONGODB_URI);
	
		//Runs a create with the raw data
		Departments.create(DepartmentData)
		Surveys.create(SurveysData)
		Questions.create(QuestionsData)
	}
});
