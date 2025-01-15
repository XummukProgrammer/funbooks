const express = require('express')
const UsersController = require('../controllers/users-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, UsersController.create)
router.post('/login', urlencodedParser, UsersController.login)
router.get('/get/:tokenId', UsersController.get)
router.get('/get_all/:tokenId', UsersMiddleware.authenticate, UsersController.getAll)

exports.get = () => {
    return router
}
