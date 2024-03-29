const {getCourse,getsingCourse,createCourse} = require('../controllers/courseController')
const express = require('express')
const router = express.Router()

router.get('/', getCourse)

router.get('/:id', getCourse)

router.post('/', createCourse)
// router.delete('/:id',(req,res)=>{
//     res.json({mssg:"delete  a signle"})
// })


// router.patch('/:id',(req,res)=>{
//     res.json({mssg:"update  a signle"})
// })


module.exports =router