var fs = require('fs'),
    logger = require('koa-logger'),
    config = require('./config'),
    bodyParser = require('koa-bodyparser'),
    views = require('koa-views'),
    serve = require('koa-static'),
    session = require('koa-session'),
    path = require('path'),
    helmet = require('koa-helmet'),
    router = require('koa-router'),
    db = require('../models/mongo'); 

module.exports = function (app) {
  
  /**
   * For simple error handle
   */
  app.use(function *(next) {
    try {
      yield next;
    } catch (e) {
      this.body = e.message;
    }
  });

  /**
   * Helmet to security your app
   */
  app.use(helmet.xframe('deny'));
  app.use(helmet.iexss({ setOnOldIE: true }));
  app.use(helmet.ienoopen());
  app.use(helmet.contentTypeOptions());
  app.use(helmet.hidePoweredBy());

  app.use(logger());
  
  app.use(bodyParser());
  app.use(serve(config.app.root + '/client/'));

  /**
   * Template engine, default to jade
   */
  app.use(views(path.normalize(__dirname + '/../../client/views/'), {
    default: 'jade'
  }));

  app.keys = ['70df6669c6d9f0a0e4ec1b1e0a4e4e8b'];
  app.use(session());

  fs.readdirSync(config.app.root + '/server/controllers').forEach(function (file) {
    require(config.app.root + '/server/controllers/' + file).init(app);
  });
}