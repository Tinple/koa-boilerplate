koa-boilerplate
===============

Boilerplate for koa, including html5 boilerplate and mobile boilerplate.

## Install

```
$ git clone https://github.com/Tinple/koa-boilerplate.git
```

## Start

```
$ npm start
```

## Basic structure

A basic koa app boilerplate initially look like this:

```
.
├── client
│   ├── robots.txt
│   ├── crossdomain.xml
│	├── manifest.webapp
│	├── .htaccess
│	├── css
│	│	├── m.main.css 		// for mobile
│	│	├── main.css
│	│	└── normalize.css
│	│
│	├── js
│	│	├── helper.js
│	│	├── main.js
│	│	├── plugins.js
│	│	└── vendor
│	│		├── html5shiv.min.js
│	│		├── jquery-2.1.1.min.js
│	│		├── jquery-2.1.1.min.map
│	│		└── modernizr-2.8.3.min.js
│	├── img
│	│	├── startup
│	│	└── touch
│	│
│	└── views			// jade default
│		├── index.jade
│		├── m-index.jade 		// for mobile
│		├── includes
│		│	├── foot.jade
│		│	├── m-foot.jade
│		│	├── head.jade
│		│	└── m-head.jade
│		└── layouts
│			├── default.jade
│			└── mobile.jade
│
├── server
│   ├── models
│	│	└── mongo.js 		// mongo default
│	│
│   ├── controllers
│	│	└── index.js
│	│
│   └── config
│       ├── config.js
│       └── koa.js
│
└── app.js
```

## LICENSE

MIT