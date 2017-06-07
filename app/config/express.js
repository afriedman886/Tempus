var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');


module.exports = function() {
    var app = express();
    require('../routes/index.server.routes.js')(app);
    require('../routes/patients.server.routes.js')(app);
    return app;
};

