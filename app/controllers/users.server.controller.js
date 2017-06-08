var Patient = require('mongoose').model('Patient');
var passport = require('passport');

var getErrorMessage = function(err) {
    var message = '';
    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    }
    else {
        for (var errName in err.errors) {
            if (err.errors[errName].message)
                message = err.errors[errName].message;
        }
    }

    return message;
};

exports.renderLogin = function(req, res, next) {
    if (!req.patient) {
        res.render('login', {
            title: 'Log-in Form',
            messages: req.flash('error') || req.flash('info')
        });
    }
    else {
        return res.redirect('/');
    }
};

exports.logout = function(req, res) {
    req.logout();
    res.redirect('/');
};

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

exports.update = function(req, res, next) {
    Patient.findByIdAndUpdate(req.patient.id, req.body, function(err, patient) {
        if (err) {
            return next(err);
        }
        else {
            res.json(patient);
        }
    });
};

// the following create/delete functions are unnecessary for the current version of this app, but I included them to help me learn about Node/Express

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

exports.delete = function(req, res, next) {
    req.patient.remove(function(err) {
        if (err) {
            return next(err);
        }
        else {
            res.json(req.patient);
        }
    })
};

