var config = require('./config');
var express = require('express');
var bodyParser = require('body-parser');
var passport = require('passport');


module.exports = function() {
    var app = express();

    app.use(passport.initialize());
    app.use(passport.session());

    app.use(bodyParser.urlencoded({
        extended: true
    }));

    app.use(bodyParser.json());

    app.set('views', '../views');
    app.set('view engine', 'ejs');

    require('../routes/index.server.routes.js')(app);
    require('../routes/patients.server.routes.js')(app);

    app.use(express.static('../../public'));

    return app;
};

