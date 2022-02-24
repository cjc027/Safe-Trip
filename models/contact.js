const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    fullName: String,
    email: String,
    phoneNumber: String
});

module.exports = mongoose.model('Contact', contactSchema);