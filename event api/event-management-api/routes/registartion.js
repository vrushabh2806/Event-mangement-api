const express = require('express');
const router = express.Router();
const Registration = require('../models/registaration.js');
const Event = require('../models/event');

// Register a user for an event
router.post('/', async (req, res) => {
    const { eventId, userName, email } = req.body;
    try {
        const event = await Event.findById(eventId);
        if (!event) return res.status(404).json({ message: 'Event not found' });

        const registration = new Registration({ eventId, userName, email });
        const savedRegistration = await registration.save();
        res.status(201).json(savedRegistration);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
