

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const batchSchema = new Schema({
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
      ref: 'Course', 
      required: true
    }
  });

    module.exports = mongoose.model('modalBatch', batchSchema)


    

