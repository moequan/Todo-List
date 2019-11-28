const mongoose = require("mongoose");
Schema = mongoose.Schema;

const TodoSchema = new Schema({
      listItem: {
        type: String,
        required: true,
        unique: true
      }
    })

      module.exports = mongoose.model("Todo", TodoSchema)
