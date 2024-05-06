const {createBatch,getBatch, getBatchCount, deletebatch} = require('../controllers/batchControlle')
const express = require('express')
const router = express.Router()

router.get('/count',getBatchCount)
router.post('/', createBatch)
router.get('/', getBatch)
router.delete('/:id', deletebatch)


module.exports =router