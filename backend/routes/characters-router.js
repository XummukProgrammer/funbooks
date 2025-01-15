const express = require('express')
const CharactersController = require('../controllers/characters-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, UsersMiddleware.authenticate, CharactersController.create)
router.get('/get/:tokenId/:id', UsersMiddleware.authenticate, CharactersController.get)
router.get('/get_all/:tokenId', UsersMiddleware.authenticate, CharactersController.getAll)

exports.get = () => {
    return router;
}
