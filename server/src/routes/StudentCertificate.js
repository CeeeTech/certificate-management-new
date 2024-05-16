
const express = require('express');
const router = express.Router();
const { getStudentCertificate, createStudentCertificate, deleteStudentCertificate, getStudentCertificateCount } = require('../controllers/studentCertificates');

router.get('/', getStudentCertificate);
router.post('/', createStudentCertificate);
router.delete('/:id', deleteStudentCertificate);
router.get('/count',getStudentCertificateCount)
module.exports = router;