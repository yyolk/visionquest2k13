var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'visionquest2k13'
    },
    port: 3000,
    db: 'mongodb://localhost/visionquest2k13-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'visionquest2k13'
    },
    port: 3000,
    db: 'mongodb://localhost/visionquest2k13-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'visionquest2k13'
    },
    port: 3000,
    db: 'mongodb://localhost/visionquest2k13-production'
  }
};

module.exports = config[env];
