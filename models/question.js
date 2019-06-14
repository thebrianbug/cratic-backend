var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create the survey schema
var questionSchema = new Schema({

  description: {
    type: String,
    trim: true,
    required: true,
    index: true
  },

  completed_answers: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answers"
    }
  ],
  
  completed_members: [
    {
      type: Schema.Types.ObjectId,
      ref: "Users"
    }
  ],

  survey_id: {
    type: Number,
    trim: true,
    required: true
  },

  survey_name: {
    type: String,
    trim: true,
    required: true
  },

  question_category: {
    type: String,
    trim: true,
    required: true
  },

  question_id: {
    type: Number
  },

  responses: { // How many comments does the question have?
    type: Number,
    default: 0
  },

  views: { // How many views does the question have?
    type: Number,
    default: 0
  },

  likes: { // How many comments have received likes?
    type: Number
  },

  avg_response: {
    type: Number
  },

  stDev: { // What is the numeric St Dev of the responses
    type: Number,
    default: 0
  },

  consensus: { // High, Medium or Low (based on stDev)
    type: String,
    default: "High"
  },

  create_date: {
    type: Date,
    default: Date.now
  }
});

const Question = mongoose.model('Questions', questionSchema);

module.exports = Question;
