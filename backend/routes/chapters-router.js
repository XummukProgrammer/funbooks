const express = require('express')
const ChaptersController = require('../controllers/chapters-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')
const BooksMiddleware = require('../middlewares/books-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, [ UsersMiddleware.authenticate, BooksMiddleware.getBook ], ChaptersController.create)
router.get('/get_by_id/:tokenId/:id', UsersMiddleware.authenticate, ChaptersController.getById)
router.get('/get_by_book_id/:tokenId/:bookId', [ UsersMiddleware.authenticate, BooksMiddleware.getBook ], ChaptersController.getByBookId)
router.get('/get_all/:tokenId', UsersMiddleware.authenticate, ChaptersController.getAll)

exports.get = () => {
    return router;
}
