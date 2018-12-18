const express = require('express');
const wardModel = require('../models/wardModel');

// Initialize router
const router = express.Router();

// Route to handle GET request
router.get('/wards', (req, res, next) => {
    res.send({type: "GET"});
});

// Route to handle POST request
router.post('/wards', (req, res, next) => {
    var ward = new wardModel(req.body);
    ward.save().then((ward) => {
        res.send(ward);
    });
});

// Route to handle PUT requests
router.put('/wards/:id', (req, res, next) => {
    res.send({type: "PUT"});
});

// Route to handle DELETE requests
router.delete('/wards/:id', (req, res, next) => {
    res.send({type: "DELETE"});
});

// Export router
module.exports = router;