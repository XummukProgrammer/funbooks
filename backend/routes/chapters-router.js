const express = require('express')
const ChaptersController = require('../controllers/chapters-controller.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, ChaptersController.create)
router.get('/get_by_id/:id', ChaptersController.getById)
router.get('/get_by_book_id/:bookId', ChaptersController.getByBookId)
router.get('/get_all', ChaptersController.getAll)

exports.get = () => {
    return router;
}
