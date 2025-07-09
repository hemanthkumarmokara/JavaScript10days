// app.js
const express = require('express');
const app = express();

const userRoute = require('./routes/user'); // ← Import the route
app.use(userRoute);                         // ← Use it

module.exports = app;

