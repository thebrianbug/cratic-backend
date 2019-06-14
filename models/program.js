var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create the survey schema
var programSchema = new Schema({
  
  program_name: {
    type: String,
    trim: true,
    required: true
  },
  
  icon: {
    type: String,
    trim: true
  },

  description: {
    type: String,
    trim: true
  },
  
  synonyms: {
    type: String,
    trim: true
  },
   
  surveys: {
    type: Array
  },
 
  create_date: {
    type: Date,
    default: Date.now
  },

  created_by: {
    type: Schema.Types.ObjectId,
    ref: 'Created_By'
  },
});

const Program = mongoose.model('Programs', programSchema);

module.exports = Program;
