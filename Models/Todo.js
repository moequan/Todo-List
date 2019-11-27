const mongoose = require("mongoose");
onst {Schema} = mongoose;

const TodoSchema = new Schema({
  listItem: {
    type: String,
    required: true,
    unique: true
  }

  module.exports = mongoose.model("Todo", TodoSchema)
