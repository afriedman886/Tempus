var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(config.db);
    require('../models/patient.server.model');
    require('../models/doctor.server.model');
    require('../models/appointment.server.model');
    return db;
};
