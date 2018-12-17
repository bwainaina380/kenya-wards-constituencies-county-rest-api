const express = require('express');

// Initialize express app
const app = express();


// Listen for requests on port 3000 or the port allocated by the host such as Heroku
app.listen(process.env.port || 3000, () => {
    console.log("Listening for requests on port 3000");
});
