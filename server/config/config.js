/**
 * Environment variables and application configuration.
 */

var path = require('path'),
    _ = require('lodash');

var baseConfig = {
  app: {
    root: path.normalize(__dirname + '/../..'),
    env: process.env.NODE_ENV,
    secret: '3ecret' /* used in signing the jwt tokens */
  }
};

var platformConfig = {
  development: {
    app: {
      port: 9000
    },
    mongo: {
      url: 'localhost/koa-app-dev'
    }
  },

  test: {
    app: {
      port: 10000
    },
    mongo: {
      url: 'localhost/koa-app-test'
    }
  },

  production: {
    app: {
      port: process.env.PORT || 3000,
      cacheTime: 3 * 24 * 60 * 60 * 1000 /* default caching time (3 days) for static files, calculated in milliseconds */
    },
    mongo: {
      url: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'localhost/koa-app'
    }
  }
};

// override the base configuration with the platform specific values
module.exports = _.merge(baseConfig, platformConfig[baseConfig.app.env || (baseConfig.app.env = 'development')]);