const {createBatch,getBatch} = require('../controllers/batchControlle')
const express = require('express')
const router = express.Router()


router.post('/', createBatch)
router.get('/', getBatch)


module.exports =router