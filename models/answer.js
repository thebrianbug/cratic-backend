var mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
var Schema = mongoose.Schema;

// Create the Comment schema
var answerSchema = new Schema({
  
  user: {
    type: String,
    trim: true
  },

  user_dept_oid: {
      type: Schema.Types.ObjectId,
      ref: "Departments"
  },

  user_oid: {
      type: Schema.Types.ObjectId,
      ref: "Users"
  },

  survey_oid: {
      type: Schema.Types.ObjectId,
      ref: "Surveys"
  },

  question_oid: {
      type: Schema.Types.ObjectId,
      ref: "Questions"
  },

  question: {
    type: String,
    trim: true
  },

  question_id: {
    type: Number,
    trim: true
  },

  topic_survey: {
    type: String,
    trim: true
  },

  topic_category: {
    type: String,
    trim: true
  },

  comment: { //This is the information the user submits
    type: String,
    trim: true,
    required: true
  },

  watson: {
    type: Object
  },

  response: { //This is the answer to: Never, Rarely, Sometimes, Always
    type: String,
    trim: true
  },

  response_num: {
    type: Number
  },

  department: {
    type: String
  },

  created_date: {
     type: Date,
     default: Date.now
  },

  supporters : {
    type: [String],
    trim: true
  },
  
  support: {
    type: Number,
    default: 0
  },

  anger: {
    type: Number,
    default: 0
  },

  fear: {
    type: Number,
    default: 0
  },

  disgust: {
    type: Number,
    default: 0
  },

  joy: {
    type: Number,
    default: 0
  },

  sadness: {
    type: Number,
    default: 0
  },

  analytical: {
    type: Number,
    default: 0
  },

  confident: {
    type: Number,
    default: 0
  },

  insecure: {
    type: Number,
    default: 0
  },

  openness: {
    type: Number,
    default: 0
  },

  conscienciousness: {
    type: Number,
    default: 0
  },

  extroversion: {
    type: Number,
    default: 0
  },

  agreeableness: {
    type: Number,
    default: 0
  },

  emotional: {
    type: Number,
    default: 0
  }
});

answerSchema.index({ user_oid: 1, question_oid: 1, comment: 1}, {unique: true});
// answerSchema.index({ comment: 1, supporters: 1}, {unique: true});

const Answer = mongoose.model('Answers', answerSchema);

module.exports = Answer;
