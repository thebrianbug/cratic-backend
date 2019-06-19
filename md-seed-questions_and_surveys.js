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

let department = DepartmentData[0]["department_name"];

// Connect to the Mongo DB
mongoose.connect(MONGODB_URI, (err, db) => {
	if (err) {
		console.log('Unable to connect to the mongoDB server. Error:', err);
	} else {
		console.log('Connection established to', MONGODB_URI);
	
		Departments.create(DepartmentData, function(){
					
			for (let i=0; i<SurveysData.length; i++){
				Surveys.create(SurveysData[i], function(err, doc){
					if(err) throw(err)

					console.log("Survey ids: "+doc._id)
					Departments.findOneAndUpdate({"department_name": department}, {"$push": {"surveys": doc._id}}).exec(function(err, doc) {
						if(err) throw(err)
					})
				})
			}

			for (let i=0; i<QuestionsData.length; i++){
				Questions.create(QuestionsData[i], function(err, doc){
					if(err) throw(err)

						console.log("QUESTION ids: "+doc._id)
						Surveys.findOneAndUpdate({"survey_name": doc.survey_name}, {"$push": {"questions": doc._id}}).exec(function(err, doc){
						if(err) throw(err)
					})
				})
			};
		})
	}
})

// mongoose.disconnect();
