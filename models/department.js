var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create the survey schema
var departmentSchema = new Schema({
  
  department_name: {
    type: String,
    trim: true,
    required: true
  },

  survey_ids: {
    type: [Number]
  },

  program: {
    type: String
  },
  
  surveys: [{
    type: Schema.Types.ObjectId,
    ref: 'Surveys'
  }],

  benchmarks: [{
    type: Schema.Types.ObjectId,
    ref: 'Benchmarks'
  }],

  participants: [{
    type: String
  }],

  invitees: [{
    type: String
  }],

  create_date: {
    type: Date,
    default: Date.now
  },

  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'Created_By'
  },
});

departmentSchema.index({ department_name: 1, created_by: 1}, {unique: true});

const Department = mongoose.model('Departments', departmentSchema);

module.exports = Department;
