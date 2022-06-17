const express = require('express')

const router = express.Router()

router.get('/info', function(req, res, next) {
    res.json('user info...')
})

router.get('/', function(req, res, next){
    res.send('this is user page.')
})

module.exports = router
