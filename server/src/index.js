require('dotenv').config();


const express = require('express')
const cors = require('cors');
const app = express()
const cmsRoutes = require('./routes/student')
const cmsCourseRoutes = require('./routes/Course')
const cmsBatchRoutes = require('./routes/Batches')
 const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.json({mssg:"welcome keshana  "})
});
app.use(express.json());
app.use('/api/Student',cmsRoutes)
app.use('/coures', cmsCourseRoutes)
app.use('/api/batch' ,cmsBatchRoutes)
app.use(cors());



mongoose.connect(process.env.MONG_URL)
  .then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("connect  db",process.env.PORT);
    })
  })
  .catch((error)=>{
    console.log(error);
  })

