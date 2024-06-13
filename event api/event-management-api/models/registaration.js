const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },
});

module.exports = mongoose.model('Registration', registrationSchema);
