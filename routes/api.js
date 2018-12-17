const express = require('express');

// Initialize router
const router = express.Router();

// Route to handle GET request
router.get('/wards', (req, res) => {
    res.send({type: "GET"});
});

// Route to handle POST request
router.post('/wards', (req, res) => {
    res.send({
        name: req.body.name,
        county: req.body.county
    })
});

// Route to handle PUT requests
router.put('/wards/:id', (req, res) => {
    res.send({type: "PUT"});
});

// Route to handle DELETE requests
router.delete('/wards/:id', (req, res) => {
    res.send({type: "DELETE"});
});

// Export router
module.exports = router;