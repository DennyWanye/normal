const express = require('express')

const router = require('./router')

const app = express()

router.get('/', function(req, res, next) {
    res.send('welcome to xiaomu admin system.')
})


app.use('/', router)

const server = app.listen(5000, function() {
    const {address, port} = server.address()
    console.log(address)
    console.log(port)
    console.log('HTTP server running at: http://%s:%s', address, port)
})

