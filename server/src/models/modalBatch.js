const mongoose = require('mongoose');

const batchSchema = new mongoose.Schema({
    batch_id: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: String,
        required: true
    },
    numberOfStudents: {
        type: Number,
        required: true
    },
    startdate: {
        type: Date,
        required: true
    },
    enddate: {
        type: Date,
        required: true
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course', // Reference to the 'Course' model
        required: true
    }
});

module.exports = mongoose.model('ModalBatch', batchSchema);
