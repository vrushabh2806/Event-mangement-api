const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const eventRoutes = require('./routes/events');
const registrationRoutes = require('./routes/registartion');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());


app.use('/api/events', eventRoutes);
app.use('/api/registrations', registrationRoutes);

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

module.exports = app;
