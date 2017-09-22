// require mongoose
var mongoose = require('mongoose');
// create the schema
var NoteSchema = new mongoose.Schema({
  content: String},
{timestamps:true})
// register the schema as a model
var Note = mongoose.model('Note', NoteSchema);