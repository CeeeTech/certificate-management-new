

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const StudentCertificates = new Schema({
    sName: 
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Studnet', 
            required: true,
           
          }
    ,
    markValue: {
        type: String,
        required: true
    },
    result: {
        type: String,
        required: true
    },
  
});

module.exports = mongoose.model('studnetCertificates',StudentCertificates);
