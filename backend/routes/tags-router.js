const express = require('express')
const TagsController = require('../controllers/tags-controller.js')
const UsersMiddleware = require('../middlewares/users-middleware.js')
const RatingsMiddleware = require('../middlewares/ratings-middleware.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, [ UsersMiddleware.authenticate, RatingsMiddleware.getRating ], TagsController.create)
router.get('/get_from_id/:tokenId/:id', UsersMiddleware.authenticate, TagsController.getFromId)
router.get('/get_from_name/:tokenId/:name', UsersMiddleware.authenticate, TagsController.getFromName)
router.get('/get_all/:tokenId', UsersMiddleware.authenticate, TagsController.getAll)

exports.get = () => {
    return router;
}
