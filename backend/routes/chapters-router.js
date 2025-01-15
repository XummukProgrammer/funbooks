const express = require('express')
const ChaptersController = require('../controllers/chapters-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, UsersMiddleware.isAuthenticate, ChaptersController.create)
router.get('/get_by_id/:tokenId/:id', UsersMiddleware.isAuthenticate, ChaptersController.getById)
router.get('/get_by_book_id/:tokenId/:bookId', UsersMiddleware.isAuthenticate, ChaptersController.getByBookId)
router.get('/get_all/:tokenId', UsersMiddleware.isAuthenticate, ChaptersController.getAll)

exports.get = () => {
    return router;
}
