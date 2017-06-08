var Patient = require('mongoose').model('Patient');

exports.list = function(req, res, next) {
    Patient.find({}, function(err, patients) {
        if (err) {
            return next(err);
        }
        else {
            res.json(patients);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.patient);
};

exports.patientByID = function(req, res, next, id) {
    Patient.findOne({
            _id: id
        },
        function(err, patient) {
            if (err) {
                return next(err);
            }
            else {
                req.patient = patient;
                next();
            }
        }
    );
};

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

