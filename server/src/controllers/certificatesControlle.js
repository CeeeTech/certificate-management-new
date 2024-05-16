const Certificate = require('../models/modalCetificate');

const getCertificate = async (req, res) => {
    try {
        const certificates = await Certificate.find({}).sort({ createdAt: -1 });
        res.status(200).json(certificates);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createCertificate = async (req, res) => {
    const { Cname, course, Description, markType,Level } = req.body;

    try {
        const newCertificate = await Certificate.create({ Cname, course, description: Description, markType,Level });
        res.status(200).json(newCertificate);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCertificate = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedCertificate = await Certificate.findOneAndDelete({ _id: id });
        if (!deletedCertificate) {
            return res.status(404).json({ error: 'Certificate not found' });
        }
        res.status(200).json(deletedCertificate);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getCertificate,
    createCertificate,
    deleteCertificate
};