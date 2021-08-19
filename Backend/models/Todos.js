const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema for todo
const TodoSchema = new Schema({
  todo: {
    type: String,
    required: [true, 'The todo text field is required']
  }
})

module.exports = Todos = mongoose.model('todos', TodoSchema)