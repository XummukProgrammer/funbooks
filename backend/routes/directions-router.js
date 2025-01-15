const express = require('express')
const DirectionsController = require('../controllers/directions-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, UsersMiddleware.authenticate, DirectionsController.create)
router.get('/get/:tokenId/:id', UsersMiddleware.authenticate, DirectionsController.get)
router.get('/get_all/:tokenId', UsersMiddleware.authenticate, DirectionsController.getAll)

exports.get = () => {
    return router;
}
