const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    date: {
        type: Date,
    },
    location: {
        type: String,
    },
    time: {
        type: String,
    },
    photo: {
        type: String,
    },
    pdfFile: {
        type: String,
    }
});


module.exports = mongoose.model('Event', eventSchema);;
