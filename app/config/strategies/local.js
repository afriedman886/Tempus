var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var Patient = require('mongoose').model('Patient');

module.exports = function() {
    passport.use(new LocalStrategy(function(username, password, done) {
        Patient.findOne(
            {username: username},
            function(err, patient) {
                if (err) {
                    return done(err);
                }

                if (!patient) {
                    return done(null, false, {message: 'Username not found, please try again'});
                }

                if (!patient.authenticate(password)) {
                    return done(null, false, {message: 'Invalid password'});
                }

                return done(null, patient);
            }
        );
    }));
};