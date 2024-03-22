require('dotenv').config();


const express = require('express')

const app = express()

const cmsRoutes = require('./routes/student')
const cmsbacthRoutes = require('./routes/batch')
const mongoose = require('mongoose')

app.get('/', (req, res) => {
    res.json({mssg:"welcome keshana  "})
});
app.use(express.json());
app.use('/api/crm',cmsRoutes)
app.use('/api/cmsbatch', cmsbacthRoutes)

mongoose.connect(process.env.MONG_URL)
  .then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("connect  dB ",process.env.PORT);
    })
  })
  .catch((error)=>{
    console.log(error);
  })

