const mongoose = require('mongoose')

const Schema = mongoose.Schema

const cmscertificate = new Schema({

    courseName: {
        type: String,
        required: true,
        trim: true
      },
      courseId: {
        type: String,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      }

})

module.exports = mongoose.model('modelCourse', cmscertificate)