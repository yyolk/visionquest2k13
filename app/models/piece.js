var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var PieceSchema = new Schema({
  artist : String,
  title : String,
  homepage : String,
  image : String,
  videoinfo : String,
  time : Date,
  description: String,
});

mongoose.model('Piece', PieceSchema);
