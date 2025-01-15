const express = require('express')
const BooksController = require('../controllers/books-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')
const CategoriesMiddleware = require('../middlewares/categories-middleware.js')
const TagsMiddleware = require('../middlewares/tags-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, [ UsersMiddleware.isAuthenticate, CategoriesMiddleware.getCategory, TagsMiddleware.getTags ], BooksController.create)

exports.get = () => {
    return router;
}
