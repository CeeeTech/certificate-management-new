const {createBatch} = require('../controllers/batchControlle')
const express = require('express')
const router = express.Router()


router.post('/', createBatch)



module.exports =router