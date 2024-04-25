const {createBatch,getBatch, getBatchCount} = require('../controllers/batchControlle')
const express = require('express')
const router = express.Router()

router.get('/count',getBatchCount)
router.post('/', createBatch)
router.get('/', getBatch)


module.exports =router