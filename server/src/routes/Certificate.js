// routes/certificate.js
const express = require('express');
const router = express.Router();
const { getCertificate, createCertificate, deleteCertificate } = require('../controllers/certificatesControlle');

router.get('/', getCertificate);
router.post('/', createCertificate);
router.delete('/:id', deleteCertificate);

module.exports = router;