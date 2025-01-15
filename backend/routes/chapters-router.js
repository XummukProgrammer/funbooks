const express = require('express')
const ChaptersController = require('../controllers/chapters-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, UsersMiddleware.isAuthenticatePost, ChaptersController.create)
router.get('/get_by_id/:tokenId/:id', UsersMiddleware.isAuthenticateGet, ChaptersController.getById)
router.get('/get_by_book_id/:tokenId/:bookId', UsersMiddleware.isAuthenticateGet, ChaptersController.getByBookId)
router.get('/get_all/:tokenId', UsersMiddleware.isAuthenticateGet, ChaptersController.getAll)

exports.get = () => {
    return router;
}
