const express = require('express')
const UsersRouter = require('./users-router.js')

const router = express.Router()

router.use('/users', UsersRouter.get())

exports.get = () => {
    return router;
}
