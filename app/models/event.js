var mongoose = require('mongoose'),
  Schema = mongoose.Schema;
  // PieceSchema = require('piece');

var PieceSchema = new Schema({
  artist : String,
  title : String,
  homepage : String,
  image : String,
  videoinfo : String,
  time : Date,
  description: String
});

var EventSchema = new Schema({
  title : String,
  description : String,
  time : String,
  pieces : [PieceSchema]
});

mongoose.model('Event', EventSchema);
