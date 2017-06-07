var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PatientSchema = new Schema({
    username: String,
    password: String,
    name: String,
    age: Number,
    email: String,
    address: String,
    phone: String,
    files: Array,
});

mongoose.model('Patient', PatientSchema);