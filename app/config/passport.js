var passport = require('passport');
var mongoose = require('mongoose');

module.exports = function() {
    var Patient = mongoose.model('Patient');

    passport.serializeUser(function(patient, done) {
        done(null, patient.id);
    });

    passport.deserializeUser(function(id, done) {
        Patient.findOne(
            {_id: id},
            '-password',
            function(err, patient) {
                done(err, patient);
            }
        );
    });

    require('./strategies/local.js')();
};