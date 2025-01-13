const express = require('express')
const UsersRouter = require('./users-router.js')
const BooksRouter = require('./books-router.js')

const router = express.Router()

router.use('/users', UsersRouter.get())
router.use('/books', BooksRouter.get())

exports.get = () => {
    return router;
}
