var Patient = require('mongoose').model('Patient');

exports.create = function(req, res, next) {
    var patient = new Patient(req.body);
    patient.save(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(patient);
        }
    });
};