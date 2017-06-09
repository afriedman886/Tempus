var config = require('./config');
var mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    require('../models/user.server.model');
    require('../models/appointment.server.model');
    return db;
};
