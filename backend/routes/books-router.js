const express = require('express')
const BooksController = require('../controllers/books-controller.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, BooksController.create)

exports.get = () => {
    return router;
}
