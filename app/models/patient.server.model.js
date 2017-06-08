var mongoose = require('mongoose');
var crypto = require('crypto');
var Schema = mongoose.Schema;

var PatientSchema = new Schema({
    username: {
      type: String,
      trim: true,
      unique: true
    },
    password: String,
    provider: String,
    providerId: String,
    name: String,
    age: Number,
    email: String,
    address: String,
    phone: String,
    files: Array,
});

PatientSchema.pre('save',
    function(next) {
        if (this.password) {
            var md5 = crypto.createHash('md5');
            this.password = md5.update(this.password).digest('hex');
        }

        next();
    }
);

PatientSchema.methods.authenticate = function(password) {
    var md5 = crypto.createHash('md5');
    md5 = md5.update(password).digest('hex');

    return this.password === md5;
};

PatientSchema.statics.findUniqueUsername = function(username, suffix, callback) {
    var _this = this;
    var possibleUsername = username + (suffix || '');

    _this.findOne(
        {username: possibleUsername},
        function(err, patient) {
            if (!err) {
                if (!patient) {
                    callback(possibleUsername);
                }
                else {
                    return _this.findUniqueUsername(username, (suffix || 0) + 1, callback);
                }
            }
            else {
                callback(null);
            }
        }
    );
};

mongoose.model('Patient', PatientSchema);