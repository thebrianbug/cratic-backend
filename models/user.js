var mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
var Schema = mongoose.Schema;

// Create the User schema
var userSchema = new Schema({

  username: {
    type: String,
    trim: true,
    unique: true,
    required: true,
    index: true
  },

  is_admin: {
    type: Boolean,
    required: true,
    default: false
  },

  credits: {
    type: Number,
    default: 0
  },

  programs: {
    type: Number,
    default: 0
  },

  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },

  is_email_confirmed: {
    type: Boolean,
    required: true,
    default: false
  },

  password: {
    type: String,
    trim: true,
    required: true
  },

  department_name: {
    type: String,
    trim: true,
    required: true
  },

  department_id:
  {
    type: Schema.Types.ObjectId,
    ref: "Departments"
  },

  department_survey_ids: [
    {
      type: Schema.Types.ObjectId,
      ref: "Surveys",
      default: []
    }
  ],

  active_survey_id: {
      type: Schema.Types.ObjectId,
      ref: "Surveys"
  },

  active_survey_questions_complete: {
    type: Number,
    default: 0
  },

  complete_survey_ids: [
    {
      type: Schema.Types.ObjectId,
      ref: "Surveys",
      default: []
    }
  ],

  questions_answered: {
    type: Number
  },

  questions_complete: {
    type: Array
  },

  answer_ids: [
    {
      type: Schema.Types.ObjectId,
      ref: "Answers",
      default: []
    }
  ],

  question_ids: [
    {
      type: Schema.Types.ObjectId,
      ref: "Questions",
      default: []
    }
  ],

  support_votes: {
    type: Number,
    default: 0
  },

  answer_array: {
    type: Array,
    index: true
  },

  comment_array: {
    type: Array
  },

  average_comment: {
    type: Object,
    default: "Tbd"
  },

  consensus_array: { // What is the consensus per question (1=low, 2=med, 3=high)
    type: [Number]
  },

  average_consensus: {
    type: String,
    default: "Tbd"
  },

  joindate: {
     type: Date,
     default: Date.now
  }
});

// Define schema methods
userSchema.methods = {

	checkPassword: function(inputPassword) {
		return bcrypt.compareSync(inputPassword, this.password)
	},
	hashPassword: plainTextPassword => {
		return bcrypt.hashSync(plainTextPassword, 9)
	}
};

const User = mongoose.model('Users', userSchema);

module.exports = User;
