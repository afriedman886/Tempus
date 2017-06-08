var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    username: {
      type: String,
      unique: true
    },
    password: String,
    name: String,
    age: Number,
    email: String,
    address: String,
    phone: String,
    files: Array,
});

mongoose.model('Patient', PatientSchema);