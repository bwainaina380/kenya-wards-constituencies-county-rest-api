const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/warddb');

// Set Mongoose Promise equal to global Promise as Mongoose's Promise is depracated
mongoose.Promise = global.Promise;

// Import router from api.js
const routes = require('./routes/api.js');

// Initialize express app
const app = express();

// Create custom middleware to handle errors
app.use((err, req, res, next) => {
    res.status(403).send({error: err.message});
});

// Create bodyParser middleware at the top of the stack so that data in request bosy is ready for the routes
app.use(bodyParser.json());

// Create middleware to handle routes
app.use('/api', routes);


// Listen for requests on port 3000 or the port allocated by the host such as Heroku
app.listen(process.env.PORT || 3000, () => {
    console.log("Listening for requests on port 3000");
});
