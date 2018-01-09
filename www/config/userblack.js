'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

var Blue = new Schema({
    email: {
      type: String,
      trim: true
    },
    firstname: {
      type: String,
      trim: true
    },
    lastname: {
      type: String,
      trim: true
    },
    notificationkey: {
      type: String
    },
    password: {
      type: String,
      required: true,
    },
    passwordConf: {
      type: String
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date
});

Blue.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

Blue.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

Blue.methods.checkEmailstuff = function (passw, cb) {
    emailExistence.check('jlatouf2@gmail.com', function(err,res){
        //console.log('res: '+res);
        if (err) {
            return cb(err);
        }
        cb(null, res);
    });
};

module.exports = mongoose.model('userstuff22', Blue);
