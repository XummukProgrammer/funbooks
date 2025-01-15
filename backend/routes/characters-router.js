const express = require('express')
const CharactersController = require('../controllers/characters-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, UsersMiddleware.isAuthenticatePost, CharactersController.create)
router.get('/get/:tokenId/:id', UsersMiddleware.isAuthenticateGet, CharactersController.get)
router.get('/get_all/:tokenId', UsersMiddleware.isAuthenticateGet, CharactersController.getAll)

exports.get = () => {
    return router;
}
