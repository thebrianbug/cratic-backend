var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create the survey schema
var surveySchema = new Schema({

  survey_name: {
    type: String,
    trim: true,
    required: true
  },

  questions: [{
      type: Schema.Types.ObjectId,
      ref: 'Questions'
  }],

  survey_id: {
    type: Number,
    trim: true,
    required: true
  },

  program: {
    type: String,
    trim: true,
    required: true
  },

  survey_category: {
    type: String,
    trim: true,
    required: true
  },  

  description: {
    type: String,
    trim: true,
    required: true
  },

  active_members: {
    type: Array
  },

  completed_members: {
    type: Array
  },

  question_ids: {
    type: [Number]
  },

  response_option_1: {
    type: Number
  },

  response_option_2: {
    type: Number
  },

  response_option_3: {
    type: Number
  },

  response_option_4: {
    type: Number
  },

  average_response: {
    type: Number
  },

  count_response: {
    type: Number
  },

  views: {
    type: Number
  },

  array_sentiment: {
    type: Array,
    trim: true
  },

  average_sentiment: {
    type: Number
  },

  array_consensus: {
    type: Array,
    trim: true
  },

  average_consensus: {
    type: Number
  },

  key_words: {
    type: Array,
    trim: true
  },

  created_date: {
     type: Date,
     default: Date.now
  }
});

const Survey = mongoose.model('Surveys', surveySchema, 'surveys');

module.exports = Survey;
