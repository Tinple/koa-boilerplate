var monk = require('monk'),
    wrap = require('co-monk'),
    config = require('../config/config'),
    db = monk(config.mongo.url);

/**
 * users collection example
 */
db.users = wrap(db.get('users'));

module.exports = db;