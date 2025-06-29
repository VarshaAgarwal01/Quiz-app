const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  topic: String,
  question: String,
  options: [String],
  correctOption: Number,
});

module.exports = mongoose.model("Question", questionSchema);