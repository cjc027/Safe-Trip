const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    name: String,
    street: String,
    city: String,
    state: String,
    latitude: Number,
    longitude: Number
});

module.exports = mongoose.Model('Location', locationSchema);