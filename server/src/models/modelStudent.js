const mongoose = require('mongoose')

const Schema = mongoose.Schema

const CMSStudenet = new Schema({
    name: {
        type: String,
        required: true,
      },
      nic: {
        type: String,
        required: true,
      },
      dbd: {
        type: Date,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      address: {
        type: String,
        required: true,
      },
      contactNumber: {
        type: String,
        required: true,
      },
      course: {
        type: String,
        required: true,
      },
      batch: {
        type: String,
        required: true,
      },
    },{timestamps:true});

    module.exports = mongoose.model('modelStudent', CMSStudenet)
