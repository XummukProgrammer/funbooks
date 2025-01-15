const express = require('express')
const TagsController = require('../controllers/tags-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, UsersMiddleware.isAuthenticate, TagsController.create)
router.get('/get_from_id/:tokenId/:id', UsersMiddleware.isAuthenticate, TagsController.getFromId)
router.get('/get_from_name/:tokenId/:name', UsersMiddleware.isAuthenticate, TagsController.getFromName)
router.get('/get_all/:tokenId', UsersMiddleware.isAuthenticate, TagsController.getAll)

exports.get = () => {
    return router;
}
