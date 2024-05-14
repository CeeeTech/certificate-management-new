const {getCourse,getsingCourse,createCourse, deletecourse, updateCourse} = require('../controllers/courseController')
const express = require('express')
const router = express.Router()

router.get('/', getCourse)

router.get('/:id', getsingCourse)

router.post('/', createCourse)
router.delete('/:id', deletecourse)
router.put('/:id', updateCourse)


module.exports =router