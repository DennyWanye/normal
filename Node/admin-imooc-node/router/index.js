const express = require('express')
const boom = require('boom')
const userRouter = require('./user')
const {
    CODE_ERROR
} = require('../utils/constant')

const router = express.Router()

router.use('/user', userRouter)

router.use((req, res, next) => {
    next(boom.notFound('the api is not existed.'))
})

//asdf
router.use((err, req, res, next) => {
    const msg = (err && err.message) || 'system error'
    const statusCode = (err.output && err.output.statusCode) || 500
    const errorMsg = (err.output && err.output.payload && err.output.payload.error) || error.message

    res.status(statusCode).json({
        code: CODE_ERROR,
        msg,
        error: statusCode,
        errorMsg
    })
})

module.exports = router