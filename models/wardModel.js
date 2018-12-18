const mongoose = require('mongoose');

// Initialize a Schema
const Schema = mongoose.Schema;

// Create the Schema for ward data
const wardSchema = new Schema({
    name: {
        type: String,
        required: [true, 'The ward requires a name']
    },
    constituency: {
        type: String,
        required: [true, 'Every ward belongs to a constituency']
    },
    county: {
        type: String,
        required: [true, 'Every ward belongs to a county']
    }
});

// Create a ward model based on the above schema
const wardModel = mongoose.model('ward', wardSchema);

// Export ward model
module.exports = wardModel;