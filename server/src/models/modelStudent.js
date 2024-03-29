const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CMSStudenet = new Schema({
  name: {
    type: String,
    required: true
},
nic: {
    type: String,
    required: true
},
dob: {
    type: Date,
    required: true
},
email: {
    type: String,
    required: true
},
contact_no: {
    type: String,
    required: true,
    unique: true 
},
address: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
},
scheduled_to: {
    type: Date
},
course: {
  type: mongoose.Schema.Types.ObjectId, // Assuming batch is another document in the database
  ref: 'Batch', // Reference to the Batch model
  required: true
},
batch: {
    type: mongoose.Schema.Types.ObjectId, // Assuming batch is another document in the database
    ref: 'Batch', // Reference to the Batch model
    required: true
}
});

    module.exports = mongoose.model('modelStudent', CMSStudenet)


    