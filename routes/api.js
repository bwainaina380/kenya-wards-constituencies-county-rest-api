const express = require('express');
const wardModel = require('../models/wardModel');

// Initialize router
const router = express.Router();

// Route to handle GET request
router.get('/wards', (req, res, next) => {
    wardModel.find({county:req.query.county}).then((ward) => {
        res.send(ward);
    })
});

// Route to handle POST request
router.post('/wards', (req, res, next) => {
    var ward = new wardModel(req.body);
    ward.save().then((ward) => {
        res.send(ward);
    }).catch(next);
});

// Route to handle PUT requests
router.put('/wards/:id', (req, res, next) => {
    wardModel.findByIdAndUpdate({_id: req.params.id}, req.body).then(() => {
        wardModel.findOne({_id:req.params.id}).then((ward) => {
            res.send(ward)
        })
    })
});

// Route to handle DELETE requests
router.delete('/wards/:id', (req, res, next) => {
    wardModel.findByIdAndRemove({_id:req.params.id}).then((ward) => {
        res.send(ward);
    })
});

// Export router
module.exports = router;