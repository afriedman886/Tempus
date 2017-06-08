var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DoctorSchema = new Schema({
    username: {
      type: String,
      unique: true
    },
    password: String,
});

mongoose.model('Doctor', DoctorSchema);