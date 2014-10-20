var router = require('koa-router'),
    isMobile = require('ismobilejs');
    
exports.init = function (app) {
  app.use(router(app));
  app.get('/', index);
}

function *index(next) {
  var req = this.request;
  var view; 
  isMobile(req.header['user-agent']).any
    ? view = '/m-index'
    : view = '/index';
  yield this.render(view, {
    title: '',
    keywords: '',
    description: '',
    og_title: '',
    og_description: '',
    og_sitename: "",
    og_type: "",
    UA: "UA-XXXXXXXX-X",
    og_url: req.protocol + '://' + req.host + req.url,
    path: './'
  });
}