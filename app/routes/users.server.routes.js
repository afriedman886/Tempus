var users = require('../controllers/users.server.controller');
var passport = require('passport')

module.exports = function(app) {
    app.route('/patients').get(users.list);

    app.route('/patients/:patientId').get(users.read).put(users.update);

    app.param('patientId', users.userByID);

    app.route('/login')
        .get(users.renderLogin)
        .post(passport.authenticate('local', {
            successRedirect: '/patients',
            failureRedirect: '/login',
            failureFlash: true
        }));

    app.get('/logout', users.logout);
};