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
contact_no: {
    type: String,
    required: true,
    unique: true 
},
course: 
    {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'CmsCourse', 
        required: true,
       
      }


});

    module.exports = mongoose.model('modelStudent', CMSStudenet)


    