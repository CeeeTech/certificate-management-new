const {createbatch,getBatch,getsingbatch} = require('../controllers/batchController')
const express = require('express')
const router = express.Router()

router.get('/', getBatch)

router.get('/:id', getsingbatch)

router.post('/', createbatch)
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:"delete  a signle"})
// })


// router.patch('/:id',(req,res)=>{
//     res.json({mssg:"update  a signle"})
// })


module.exports =router