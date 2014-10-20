var koaConfig = require('./server/config/koa'),
    co = require('co'),
    config = require('./server/config/config'),
    koa = require('koa'),
    app = koa(),
    mongo = require('./server/models/mongo');

module.exports = app;

app.init = co(function *() {
  koaConfig(app)
  app.listen(config.app.port);
});

if (!module.parent) {
  app.init(function (err, data) {
    if (err) {
      console.log(err)
    } else {
      
    }
  });
}