const express = require('express');

// Import router from api.js
const routes = require('./routes/api.js');

// Initialize express app
const app = express();

// Create middleware to handle routes
app.use('/api', routes);


// Listen for requests on port 3000 or the port allocated by the host such as Heroku
app.listen(process.env.port || 3000, () => {
    console.log("Listening for requests on port 3000");
});
