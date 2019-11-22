const mongoose = require('mongoose');

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
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Tuitte', tuitteSchema)