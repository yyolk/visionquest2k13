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
    db: 'mongodb://localhost/visionquest2k13-development'
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
    db: process.env.MONGOLAB_URI
  }
};

module.exports = config[env];
