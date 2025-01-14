const express = require('express')
const CategoriesController = require('../controllers/categories-controller.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, CategoriesController.create)

exports.get = () => {
    return router;
}
