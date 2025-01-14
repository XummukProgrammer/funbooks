const express = require('express')
const TagsController = require('../controllers/tags-controller.js')

const router = express.Router()

const urlencodedParser = express.urlencoded({ 
    extended: false 
});

router.post('/create', urlencodedParser, TagsController.create)
router.get('/get_from_id/:id', TagsController.getFromId)
router.get('/get_from_name/:name', TagsController.getFromName)
router.get('/get_all', TagsController.getAll)

exports.get = () => {
    return router;
}
