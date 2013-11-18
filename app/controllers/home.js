var mongoose = require('mongoose'),
  Article = mongoose.model('Article'),
  Piece = mongoose.model('Piece'),
  Event = mongoose.model('Event');

exports.index = function(req, res){
  // Article.find(function(err, articles){
  //   if(err) throw new Error(err);
  //   res.render('home/index', {
  //     title: 'DINCA: Visionquest 2013',
  //     articles: articles,
  //     pieces: pieces
  //   });
  // });

  Event.find().sort({"time": 1, "_id": 1}).exec(function(err, events){
    if(err) throw new Error(err);
    // console.log(events.get());
    res.render('home/index', {
      title: 'VISIONQUEST 2013 | DINCA',
      events: events
    });
  });
};