var patients = require('../controllers/patients.server.controller');

module.exports = function(app) {
    app.route('/patients').post(patients.create).get(patients.list);

    app.route('/patients/:patientId').get(patients.read);

    app.param('patientId', patients.patientByID);
};