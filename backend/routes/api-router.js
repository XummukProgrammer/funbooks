const express = require('express')
const UsersRouter = require('./users-router.js')
const BooksRouter = require('./books-router.js')
const TagsRouter = require('./tags-router.js')
const CategoriesRouter = require('./categories-router.js')
const DirectionsRouter = require('./directions-router.js')
const RatingsRouter = require('./ratings-router.js')
const CharactersRouter = require('./characters-router.js')
const ChaptersRouter = require('./chapters-router.js')

const router = express.Router()

router.use('/users', UsersRouter.get())
router.use('/books', BooksRouter.get())
router.use('/tags', TagsRouter.get())
router.use('/categories', CategoriesRouter.get())
router.use('/directions', DirectionsRouter.get())
router.use('/ratings', RatingsRouter.get())
router.use('/characters', CharactersRouter.get())
router.use('/chapters', ChaptersRouter.get())

exports.get = () => {
    return router;
}
