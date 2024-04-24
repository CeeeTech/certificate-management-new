
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cmsRoutes = require('./routes/student');
const cmsCourseRoutes = require('./routes/Course');
const cmsBatchRoutes = require('./routes/Batches');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/Student', cmsRoutes);
app.use('/api/coures', cmsCourseRoutes);
app.use('/api/batch', cmsBatchRoutes);

mongoose.connect(process.env.MONG_URL)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
