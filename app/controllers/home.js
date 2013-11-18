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

  var keenIO = require('keen.io');

  // Configure instance. Only projectId and writeKey are required to send data.
  // console.log(res.locals);
  if(res.locals.env.production){
    var keen = keenIO.configure({
        projectId: process.env['KEEN_PROJECT_ID'],
        writeKey: process.env['KEEN_WRITE_KEY']
    });

    keen.addEvent("load", {"visit": 1}, function(err, res) {
        if (err) {
            console.log("Oh no, keen.io error!");
        } else {
            console.log("+1 load");
        }
    });
  }

  Event.find().sort({"time": 1, "_id": 1}).exec(function(err, events){
    if(err) throw new Error(err);
    // console.log(events.get());
    res.render('home/index', {
      title: 'VISIONQUEST 2013 | DINCA',
      events: events
    });
  });
};