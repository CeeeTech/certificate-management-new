const express = require('express')

const router = express.Router()
const {createStudent,getStudent,getsinglestudent,deleteStudenet,updateStudnet,getStudentCount} = require('../controllers/studentController')
router.get('/',getStudent)

router.get('/count',getStudentCount)


router.get('/:id',getsinglestudent)

router.post('/',createStudent)

router.delete('/:id',deleteStudenet)


router.patch('/:id',updateStudnet)


module.exports =router