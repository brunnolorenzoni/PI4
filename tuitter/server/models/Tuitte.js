const mongoose = require('mongoose');

const User = require('./User');

const tuitteSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    user: {
        type: Object,
        required: true
    }
});

module.exports = mongoose.model('Tuitte', tuitteSchema)