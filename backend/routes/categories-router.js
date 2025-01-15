const express = require('express')
const CategoriesController = require('../controllers/categories-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')
const DirectionsMiddleware = require('../middlewares/directions-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, [ UsersMiddleware.authenticate, DirectionsMiddleware.getDirection ], CategoriesController.create)
router.get('/get/:tokenId/:id', UsersMiddleware.authenticate, CategoriesController.get)
router.get('/get_all/:tokenId', UsersMiddleware.authenticate, CategoriesController.getAll)

exports.get = () => {
    return router;
}
