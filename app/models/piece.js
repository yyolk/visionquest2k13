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

mongoose.model('Piece', PieceSchema);
