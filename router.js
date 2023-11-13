const router = require('express').Router()
const controller = require('./controller')
router.post('/api',controller)

module.exports = router