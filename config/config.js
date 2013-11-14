var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development',
    port = process.env.PORT || '3000';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'visionquest2k13'
    },
    port: port,
    development: true,
    db: 'mongodb://heroku_app19361126:nlo7g2a4vhge4bpadr9sbr0ur9@ds053688.mongolab.com:53688/heroku_app19361126'
  },

  test: {
    root: rootPath,
    app: {
      name: 'visionquest2k13'
    },
    port: port,
    db: 'mongodb://localhost/visionquest2k13-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'visionquest2k13'
    },
    port: port,
    production: true,
    db: process.env.MONGOLAB_URI
  }
};

module.exports = config[env];
