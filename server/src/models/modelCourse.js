

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cmsCourseSchema = new Schema({
    courseName: {
        type: String,
        required: true,
        trim: true
    },
    courseId: {
        type: String,
        required: true,
        trim: true,
        unique: true 
    },
    duration: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('CmsCourse', cmsCourseSchema);
