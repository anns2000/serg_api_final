const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    Title: String,
    photo: String,
    Content: String,
    Author:String,
    Category:String,
    Views:String,
    PublicationDate: { type: Date, default: Date.now() },
    link: String,
});

module.exports = mongoose.model('News', newsSchema);
