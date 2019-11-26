const mongoose = require('mongoose');
const mongooseHidden = require('mongoose-hidden')();

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        hide: true
    },
    gender: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        hide: true
    },
    following: {
        type: Array,
    },
    followers: {
        type: Array,
    }
});

userSchema.plugin(mongooseHidden)

module.exports = mongoose.model('User', userSchema)