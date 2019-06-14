var mongoose = require("mongoose");
var Schema = mongoose.Schema;

// Create the Comment schema
var benchmarkSchema = new Schema({
  
  name: {
    type: String,
    required: true,
    trim: true
  },

  data: {
    type: Object
  },

  owner: [{
    type: Schema.Types.ObjectId,
    ref: "Users"
  }],

  department: {
    type: String,
    required: true,
    trim: true
  }
});

// benchmarkSchema.index({ name: 1, department: 1, owner: 1 }, {unique: true});

const Benchmark = mongoose.model('Benchmarks', benchmarkSchema);

module.exports = Benchmark;
