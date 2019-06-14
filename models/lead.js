var mongoose = require("mongoose");
const bcrypt = require('bcryptjs')
var Schema = mongoose.Schema;

// Create the User schema
var leadSchema = new Schema({

  email: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },

  joindate: {
     type: Date,
     default: Date.now
  }
});

const Lead = mongoose.model('Leads', leadSchema);

module.exports = Lead;
