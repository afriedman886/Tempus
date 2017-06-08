var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    username: String,
    password: String,
});

mongoose.model('Doctor', DoctorSchema);