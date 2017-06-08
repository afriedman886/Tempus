var users = require('../controllers/users.server.controller');
var passport = require('passport')

module.exports = function(app) {
    app.route('/patients').get(users.list);

    app.route('/patients/:patientId').get(patients.read).put(patients.update).delete(patients.delete);

    app.param('patientId', patients.patientByID);

    app.route('/login')
        .get(patients.renderLogin)
        .post(passport.authenticate('local', {
            successRedirect: '/',
            failureRedirect: '/login',
            failureFlash: true
        }));

    app.get('/logout', patients.logout);
};