const express = require('express')
const DirectionsController = require('../controllers/directions-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, UsersMiddleware.isAuthenticatePost, DirectionsController.create)
router.get('/get/:tokenId/:id', UsersMiddleware.isAuthenticateGet, DirectionsController.get)
router.get('/get_all/:tokenId', UsersMiddleware.isAuthenticateGet, DirectionsController.getAll)

exports.get = () => {
    return router;
}
