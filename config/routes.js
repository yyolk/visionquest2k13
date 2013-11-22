module.exports = function(app){

	//home route
	var home = require('../app/controllers/home');
  var stats = require('../app/controllers/stats');
	app.get('/', home.index);
  app.get('/stats', stats.index);
  

};
