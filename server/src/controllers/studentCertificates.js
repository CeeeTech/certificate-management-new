const StudentCertificate = require('../models/modelstudentCertificates');

const getStudentCertificate = async (req, res) => {
    try {
        const certificates = await StudentCertificate.find({}).populate({path:'sName', select:'name'}).sort({ createdAt: -1 });
        res.status(200).json(certificates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createStudentCertificate = async (req, res) => {
    const { sName, markValue, result } = req.body;

    try {
        const newCertificate = await StudentCertificate.create({ sName, markValue, result });
        res.status(200).json(newCertificate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteStudentCertificate = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCertificate = await StudentCertificate.findOneAndDelete({ _id: id });
        if (!deletedCertificate) {
            return res.status(404).json({ error: 'Certificate not found' });
        }
        res.status(200).json(deletedCertificate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getStudentCertificateCount = async (req, res) => {
    try {
        const count = await StudentCertificate.countDocuments();
        res.status(200).json({ count });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
module.exports = {
   getStudentCertificate,
   createStudentCertificate,
   deleteStudentCertificate,
   getStudentCertificateCount
};