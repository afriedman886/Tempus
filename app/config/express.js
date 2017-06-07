var express = require('express');
module.exports = function() {
    var app = express();
    require('../routes/index.server.routes.js')(app);
    require('../routes/patients.server.routes.js')(app);
    return app;
};

