const mongoose     = require('mongoose');
const Schema = mongoose.Schema;

const celebritySchema = new Schema ({
  name: { type: String },
  occupation: { type: String },
  catch_phrase: { type: String }
});

//make blueprint exportable (models and routes always need exports)
const Celebrity = mongoose.model("Celebrity", celebritySchema );
module.exports = Celebrity;