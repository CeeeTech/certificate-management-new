const {getCourse,getsingCourse,createCourse, deletecourse} = require('../controllers/courseController')
const express = require('express')
const router = express.Router()

router.get('/', getCourse)

router.get('/:id', getsingCourse)

router.post('/', createCourse)
router.delete('/:id', deletecourse)


module.exports =router