var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PieceSchema = new Schema({
  artist : String,
  title : String,
  homepage : String,
  image : String,
  videoInfo : String,
  time : Date
});

var EventSchema = new Schema({
  title : String,
  description : String,
  time : String,
  pieces : [PieceSchema]
});

mongoose.model('Event', EventSchema);
