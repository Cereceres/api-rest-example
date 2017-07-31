const mongo = require('../../databases/mongo');
const Schema = mongo.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({

    firstName: {
        type: String,
        default: ''
    },
    lastName: {
        type: String,
        default: ''
    },
    companyName: {
        type: String,
        default: ''
    },
    gender: {
        type: String,
        default: ''
    },
    profilePic: {
        type: Array
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    isEmailValid: {
        type: Boolean,
        default: false
    },
    location: {
        type: Object,
        default: '',
        index: true
    },
    birthday: {
        type: String,
        default: ''
    },
    description: {
        type: String,
        default: ''
    },
    education: {
        type: String,
        default: ''
    },
    awards: {
        type: String,
        default: ''
    },
    license: {
        type: String,
        default: ''
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isActive: {
        type: Boolean,
        default: false
    },
    phoneNumber: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        required: true
    },
});

UserSchema.pre('save', function (next) {
    const user = this;
    if (!this.isModified('password') && !this.isNew) return next();
    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

module.exports = mongo.model('User', UserSchema);
