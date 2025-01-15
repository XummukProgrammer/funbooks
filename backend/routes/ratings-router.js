const express = require('express')
const RatingsController = require('../controllers/ratings-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, UsersMiddleware.isAuthenticate, RatingsController.create)
router.get('/get/:tokenId/:id', UsersMiddleware.isAuthenticate, RatingsController.get)
router.get('/get_all/:tokenId', UsersMiddleware.isAuthenticate, RatingsController.getAll)

exports.get = () => {
    return router;
}
