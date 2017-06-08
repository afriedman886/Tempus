var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    username: {
      type: String,
      unique: true
    },
    password: String,
    name: String,
    patient: Boolean,
});

mongoose.model('Doctor', DoctorSchema);