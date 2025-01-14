const express = require('express')
const CategoriesController = require('../controllers/categories-controller.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, CategoriesController.create)
router.get('/get/:id', CategoriesController.get)
router.get('/get_all', CategoriesController.getAll)

exports.get = () => {
    return router;
}
