const {getCourse,getsingCourse,createCourse} = require('../controllers/courseController')
const express = require('express')
const router = express.Router()

router.get('/', getCourse)

router.get('/:id', getsingCourse)

router.post('/', createCourse)


module.exports =router