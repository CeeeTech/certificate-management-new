// models/modalCertificate.js
const mongoose = require('mongoose');

const CertificateSchema = new mongoose.Schema({
    Cname: {
        type: String,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    description: {
        type: String,
        required: true
    },
    markType: {
        type: String,
        required: true
    },
    Level: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ModalCertificate', CertificateSchema);
